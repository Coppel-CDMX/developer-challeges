<template>
    <div>
        <section class="mb-5">
            <div class="bg-light py-3 px-3 mt-3">
                <h3 class="title text-center">KPI de disponibilidad</h3>

                <div class="row g-3 align-items-end">
                    <div class="col-auto text-center">
                        <label for="keyword" class="col-form-label">Palabra clave (ID SAP o VIN)</label>
                        <input type="text" id="keyword" class="form-control" placeholder="Buscar por palabra clave..." v-model="filters.keyword">
                    </div>

                    <div class="col-auto text-center">
                        <label for="period" class="col-form-label">Periodo de creación</label>

                        <div class="d-flex">
                            <input type="date" id="period" class="form-control" v-model="filters.period.start">
                            <input type="date" id="period" class="form-control ms-2" v-model="filters.period.end">
                        </div>
                    </div>

                    <div class="col-auto">
                        <button class="btn btn-primary mt-2" @click="search">Buscar</button>
                        <button class="btn btn-primary mt-2" @click="exportData">Exportar</button>
                        <button class="btn btn-primary mt-2" @click="copyData" v-if="user.rolename != 'Administrador' && can('history.can.copy')">Copiar día anterior</button>
                    </div>
                </div>
            </div>

            <div class="bg-light py-1 px-3 mt-1">
                <div class="row g-3 align-items-end py-1 px-2">
                    <div class="col-auto text-light py-2 px-3 rounded-4 pill" @click.stop.prevent="clearFilter('keyword')" v-if="filters.keyword != ''">
                        Palabra clave: {{ filters.keyword }} <strong class="bg-light text-dark rounded-circle pill-erase">X</strong>
                    </div>

                    <div class="col-auto text-light py-2 px-3 rounded-4 pill" @click.stop.prevent="clearFilter('period')" v-if="filters.period.start != null || filters.period.end != null">
                        Periodo inicio: {{ filters.period.start }} - Periodo final: {{ filters.period.end }} <strong class="bg-light text-dark rounded-circle pill-erase">X</strong>
                    </div>
                </div>
            </div>

            <div class="mt-3 alert alert-success" role="alert" v-if="showSuccessMessage">
                <h6 class="text-center">Se ha realizado la acción satisfactoriamente.</h6>
            </div>

            <div class="mt-3 alert alert-danger" role="alert" v-if="errors.length > 0">
                <h6 class="text-center" v-for="error in errors" :key="error">{{ error }}</h6>
            </div>

            <div class="bg-light py-3 px-3 mt-3" v-if="vehiclesHistory.total == 0">
                <h6 class="text-center">No se encontraron resultados</h6>
            </div>

            <div class="bg-light py-3 px-3 mt-3" v-else>
                <p>Total de registros: {{ vehiclesHistory.total | formatNumber }}</p>

                <Table :params="vehiclesHistory" v-on:page-selected="search">
                    <template v-slot:head>
                        <th class="text-center" style="min-width:200px;">Acciones</th>
                        <th class="text-center" style="min-width:300px;">Estatus Unidad</th>
                        <th class="text-center" style="min-width:300px;">Motivo de estatus</th>
                        <th class="text-center" style="min-width:200px;">ID SAP</th>
                        <th class="text-center" style="min-width:200px;">VIN</th>
                        <th class="text-center" style="min-width:200px;">DRV</th>
                        <th class="text-center" style="min-width:200px;">UEN</th>
                        <th class="text-center" style="min-width:200px;">ID Agencia</th>
                        <th class="text-center" style="min-width:200px;">Agencia</th>
                        <th class="text-center" style="min-width:200px;">Función</th>
                        <th class="text-center">Tipo</th>
                        <th class="text-center">Marca</th>
                        <th class="text-center">Año</th>
                        <th class="text-center" style="min-width:200px;"># Cortinas</th>
                        <th class="text-center">Fecha</th>
                        <th class="text-center">Mes</th>
                        <th class="text-center" style="min-width:200px;">Tipo de vehículo</th>
                        <th class="text-center">Edad</th>
                    </template>

                    <tr v-for="history in vehiclesHistoryData" :key="history.id">
                        <td class="text-center">
                            <button
                                class="btn btn-success mt-2"
                                data-bs-toggle="modal"
                                data-bs-target="#addModal"
                                @click="openModal(history)"
                            >
                                Agregar
                            </button>

                            <button
                                class="btn btn-primary mt-2"
                                data-bs-toggle="modal"
                                data-bs-target="#updateModal"
                                @click="openModal(history)"
                                v-if="$moment().diff($moment(history.created_at), 'days') == 0"
                            >
                                Editar
                            </button>
                        </td>
                        <td :class="history.status.symbol === 'disponible' ? 'bg-success' : 'bg-warning'">{{ history.status.name }}</td>
                        <td class="bg-primary">{{ history.status_reason ? history.status_reason.name : '' }}</td>
                        <td>{{ history.vehicle.id_sap }}</td>
                        <td>{{ history.vehicle.vin }}</td>
                        <td>{{ history.vehicle.agency.uen.drv.name }}</td>
                        <td>{{ history.vehicle.agency.uen.name }}</td>
                        <td>{{ history.vehicle.agency.code }}</td>
                        <td>{{ history.vehicle.agency.name }}</td>
                        <td>{{ history.use.name }}</td>
                        <td>{{ history.owner.name }}</td>
                        <td>{{ history.brand.name }}</td>
                        <td>{{ history.vehicle.year }}</td>
                        <td>{{ history.vehicle.number_of_curtains }}</td>
                        <td>{{ $moment(history.created_at).format('DD/MM/YYYY') }}</td>
                        <td>{{ $moment(history.created_at).format('MMMM') }}</td>
                        <td>{{ history.type.name }}</td>
                        <td>{{ vehicleAge(history.vehicle.year) }}</td>
                    </tr>
                </Table>

                <p class="mt-3">Total de registros: {{ vehiclesHistory.total | formatNumber }}</p>
            </div>
        </section>

        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">Agregando registro</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col text-center">
                                <label>ID SAP</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.id_sap : '-'">
                            </div>

                            <div class="col text-center">
                                <label>VIN</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.vin : '-'">
                            </div>

                            <div class="col text-center">
                                <label>ID Agencia</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.agency.code : '-'">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Estatus <strong class="text-danger">*</strong></label>

                                <select class="form-control" v-model="status">
                                    <option :value="null">Seleccione uno...</option>
                                    <option :value="vehicleStatus" v-for="vehicleStatus in vehiclesStatuses" :key="vehicleStatus.id">
                                        {{ vehicleStatus.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Motivo del estatus</label>

                                <select class="form-control" v-model="statusReason" :disabled="!status || status.symbol == 'disponible'">
                                    <option :value="null">Seleccione uno...</option>
                                    <option :value="vehiclesStatusReason" v-for="vehiclesStatusReason in vehiclesStatusReasons" :key="vehiclesStatusReason.id">
                                        {{ vehiclesStatusReason.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-success" v-if="status" @click.stop.prevent="addRegister">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Actualizando registro</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <div class="col text-center">
                                <label>ID SAP</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.id_sap : '-'">
                            </div>

                            <div class="col text-center">
                                <label>VIN</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.vin : '-'">
                            </div>

                            <div class="col text-center">
                                <label>ID Agencia</label>
                                <input type="text" class="form-control text-muted" readonly :value="historySelected ? historySelected.vehicle.agency.code : '-'">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Estatus <strong class="text-danger">*</strong></label>

                                <select class="form-control" v-model="status">
                                    <option :value="null">Seleccione uno...</option>
                                    <option :value="vehicleStatus" v-for="vehicleStatus in vehiclesStatuses" :key="vehicleStatus.id">
                                        {{ vehicleStatus.name }}
                                    </option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Motivo del estatus</label>

                                <select class="form-control" v-model="statusReason" :disabled="!status || status.symbol == 'disponible'">
                                    <option :value="null">Seleccione uno...</option>
                                    <option :value="vehiclesStatusReason" v-for="vehiclesStatusReason in vehiclesStatusReasons" :key="vehiclesStatusReason.id">
                                        {{ vehiclesStatusReason.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-success" v-if="status" @click.stop.prevent="updateRegister">Actualizar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapWaitingActions } from 'vue-wait';
    import Table from '../components/Table.vue';

    export default {
        name: 'Home',
        components: {
            Table
        },
        data() {
            return {
                filters: {
                    keyword: '',
                    period: {
                        start: null,
                        end: null
                    }
                },
                historySelected: null,
                status: null,
                statusReason: null,
                showSuccessMessage: false
            };
        },
        mounted() {
            this.fetchVehiclesStatuses();

            this.fetchVehiclesHistory({
                ...this.filters,
                page: 1
            });
        },
        computed: {
            ...mapState({
                user: state => state.user.user,
                newHistorySaved: state => state.vehiclesHistory.saved,
                vehiclesStatuses: state => state.vehiclesStatus.items,
                vehiclesHistory: state => state.vehiclesHistory.items,
                vehiclesStatusReasons: state => state.vehiclesStatusReason.items,
                errors: state => state.vehiclesHistory.errors,
                copyLastHistory: state => state.vehiclesHistory.copyLastHistory
            }),
            vehiclesHistoryData() {
                return this.vehiclesHistory.data || [];
            }
        },
        methods: {
            ...mapWaitingActions({
                fetchVehiclesHistory: {
                    action: 'vehiclesHistory/search',
                    loader: 'getting vehicles history'
                },
                exportVehiclesHistory: {
                    action: 'vehiclesHistory/export',
                    loader: 'exporting vehicles history'
                },
                copyLastVehiclesHistory: {
                    action: 'vehiclesHistory/copyLastHistory',
                    loader: 'copying yesterday history'
                },
                fetchVehiclesStatuses: {
                    action: 'vehiclesStatus/fetchAll',
                    loader: 'getting vehicles statuses'
                },
                fetchVehiclesStatusReasons: {
                    action: 'vehiclesStatusReason/fetchAll',
                    loader: 'getting vehicles status reasons'
                },
                addNewRegister: {
                    action: 'vehiclesHistory/addOne',
                    loader: 'adding new history register'
                },
                updateExistRegister: {
                    action: 'vehiclesHistory/updateOne',
                    loader: 'updating new history register'
                }
            }),
            search(page = 1) {
                this.fetchVehiclesHistory({
                    ...this.filters,
                    page
                });
            },
            addRegister() {
                const newRegister = {
                    ...this.historySelected,
                    status: this.status,
                    statusReason: this.statusReason
                };

                this.addNewRegister(newRegister);
            },
            updateRegister() {
                const updatedRegister = {
                    ...this.historySelected,
                    status: this.status,
                    statusReason: this.statusReason
                };

                this.updateExistRegister(updatedRegister);
            },
            vehicleAge(vehicleDate) {
                const dateNow = this.$moment();
                return dateNow.diff(vehicleDate, 'years');
            },
            openModal(history) {
                this.historySelected = history;
                this.status = history.status;
            },
            clearFilter(filter) {
                switch(filter) {
                    case 'keyword':
                        this.filters.keyword = '';
                        break;
                    case 'period':
                        this.filters.period.start = null;
                        this.filters.period.end = null;
                        break;
                }
            },
            exportData() {
                this.exportVehiclesHistory(this.filters);
            },
            async copyData() {
                const { isConfirmed } = await this.$swal.fire({
                    title: "¡Atención!",
                    text: "¿Estás seguro de copiar los registros no actualizados? Ten en cuenta que esta acción es irreversible.",
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    showConfirmButton: true,
                    showCancelButton: true
                });

                if (isConfirmed) {
                    this.copyLastVehiclesHistory();
                }
            }
        },
        watch: {
            newHistorySaved(newValue) {
                if (newValue) {
                    this.historySelected = null;
                    this.status = null;
                    this.statusReason = '';
                    this.$refs.Close.click();
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000);
                }
            },
            copyLastHistory(newValue) {
                if (newValue) {
                    this.search();
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000);
                }
            },
            status(newValue) {
                if (newValue) {
                    this.fetchVehiclesStatusReasons({vehiclesStatusId: newValue.id});
                }
            }
        }
    };
</script>
