<template>
    <div>
        <section class="mb-5">
            <div class="bg-light py-3 px-3 mt-3">
                <h3 class="title text-center">TODO App</h3>

                <div class="row g-3 align-items-end">
                    <div class="col-auto text-center">
                        <label for="keyword" class="col-form-label">Palabra clave</label>
                        <input type="text" id="keyword" class="form-control" placeholder="Buscar por palabra clave..." v-model="filters.keyword">
                    </div>

                    <div class="col-auto text-center">
                        <label for="period" class="col-form-label">Periodo de creación</label>

                        <div class="d-flex">
                            <input type="date" id="period" class="form-control" v-model="filters.period.start">
                            <input type="date" id="period" class="form-control ms-2" v-model="filters.period.end">
                        </div>
                    </div>

                    <div class="col-auto text-center">
                        <label for="status" class="col-form-label">Estatus</label>

                        <select class="form-control" v-model="filters.status">
                            <option :value="null">Seleccione uno...</option>
                            <option :value="taskStatus" v-for="taskStatus in tasksStatuses" :key="taskStatus.id">
                                {{ taskStatus.name }}
                            </option>
                        </select>
                    </div>

                    <div class="col-auto">
                        <button class="btn btn-primary mt-2" @click="search">Buscar</button>
                        <button class="btn btn-success mt-2" data-bs-toggle="modal" data-bs-target="#addModal">Agregar</button>
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

            <div class="bg-light py-3 px-3 mt-3" v-if="tasks.total == 0">
                <h6 class="text-center">No se encontraron resultados</h6>
            </div>

            <div class="bg-light py-3 px-3 mt-3" v-else>
                <p>Total de registros: {{ tasks.total | formatNumber }}</p>

                <Table :params="tasks" v-on:page-selected="search">
                    <template v-slot:head>
                        <th class="text-center">Acciones</th>
                        <th class="text-center">Título</th>
                        <th class="text-center">Descripción</th>
                        <th class="text-center">Prioridad</th>
                        <th class="text-center">Estatus</th>
                        <th class="text-center">Fecha de creación</th>
                        <th class="text-center">Fecha de última actualización</th>
                    </template>

                    <tr v-for="task in tasksData" :key="task.id">
                        <td class="text-center">
                            <button class="btn btn-danger mt-2" @click="deleteTask(task.id)">Eliminar</button>
                            <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#updateModal" @click="openUpdateModal(task)">Editar</button>
                        </td>
                        <td>{{ task.title }}</td>
                        <td>{{ task.description }}</td>
                        <td class="text-center">{{ getPriorityText(task.priority) }}</td>
                        <td class="text-center">{{ task.status.name }}</td>
                        <td class="text-center">{{ $moment(task.created_at).format('DD/MM/YYYY h:mm:ss a') }}</td>
                        <td class="text-center">{{ $moment(task.updated_at).format('DD/MM/YYYY h:mm:ss a') }}</td>
                    </tr>
                </Table>

                <p class="mt-3">Total de registros: {{ tasks.total | formatNumber }}</p>
            </div>
        </section>

        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addModalLabel">Agregando Tarea</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="mt-3 alert alert-danger" role="alert" v-if="errors.length > 0">
                            <h6 class="text-center" v-for="error in errors" :key="error">{{ error }}</h6>
                        </div>

                        <div class="row">
                            <div class="col text-center">
                                <label>Título</label>
                                <input type="text" class="form-control" v-model="newTask.title">
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Descripción</label>

                                <textarea class="form-control" v-model="newTask.description"></textarea>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Prioridad</label>

                                <select class="form-control" v-model="newTask.priority">
                                    <option :value="null">Seleccione una...</option>
                                    <option :value="0">Baja</option>
                                    <option :value="1">Normal</option>
                                    <option :value="2">Alta</option>
                                    <option :value="3">Urgente</option>
                                </select>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col">
                                <label>Estatus</label>

                                <select class="form-control" v-model="newTask.status">
                                    <option :value="null">Seleccione uno...</option>
                                    <option :value="taskStatus" v-for="taskStatus in tasksStatuses" :key="taskStatus.id">
                                        {{ taskStatus.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-success" @click.stop.prevent="addTask">Guardar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateModalLabel">Actualizando Tarea</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ref="Close"></button>
                    </div>

                    <div class="modal-body">
                        <div class="mt-3 alert alert-danger" role="alert" v-if="errors.length > 0">
                            <h6 class="text-center" v-for="error in errors" :key="error">{{ error }}</h6>
                        </div>

                        <template v-if="taskSelected">
                            <div class="row">
                                <div class="col text-center">
                                    <label>Título</label>
                                    <input type="text" class="form-control" v-model="taskSelected.title">
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col">
                                    <label>Descripción</label>

                                    <textarea class="form-control" v-model="taskSelected.description"></textarea>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col">
                                    <label>Prioridad</label>

                                    <select class="form-control" v-model="taskSelected.priority">
                                        <option :value="null">Seleccione una...</option>
                                        <option :value="0">Baja</option>
                                        <option :value="1">Normal</option>
                                        <option :value="2">Alta</option>
                                        <option :value="3">Urgente</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mt-3">
                                <div class="col">
                                    <label>Estatus</label>

                                    <select class="form-control" v-model="taskSelected.status">
                                        <option :value="null">Seleccione uno...</option>
                                        <option :value="taskStatus" v-for="taskStatus in tasksStatuses" :key="taskStatus.id">
                                            {{ taskStatus.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </template>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-success" @click.stop.prevent="updateTask">Actualizar</button>
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
                    },
                    status: null
                },
                newTask: {
                    title: '',
                    description: '',
                    priority: null,
                    status: null
                },
                taskSelected: null,
                status: null,
                showSuccessMessage: false
            };
        },
        mounted() {
            this.getTasksStatuses();

            this.getTasks({
                ...this.filters,
                page: 1
            });
        },
        computed: {
            ...mapState({
                newTaskSaved: state => state.task.taskSaved,
                taskDeleted: state => state.task.taskDeleted,
                tasksStatuses: state => state.taskStatus.statuses,
                tasks: state => state.task.tasks,
                errors: state => state.task.errors
            }),
            tasksData() {
                return this.tasks.data || [];
            }
        },
        methods: {
            ...mapWaitingActions({
                getTasks: {
                    action: 'task/getAll',
                    loader: 'getting tasks'
                },
                getTasksStatuses: {
                    action: 'taskStatus/getAll',
                    loader: 'getting tasks statuses'
                },
                deleteOneTask: {
                    action: 'task/deleteOne',
                    loader: 'deleting one task'
                },
                addNewTask: {
                    action: 'task/insertOne',
                    loader: 'adding new task'
                },
                updateOneTask: {
                    action: 'task/updateOne',
                    loader: 'updating one task'
                }
            }),
            search(page = 1) {
                this.getTasks({
                    ...this.filters,
                    page
                });
            },
            addTask() {
                this.addNewTask(this.newTask);
            },
            async deleteTask(taskId) {
                const { isConfirmed } = await this.$swal.fire({
                    title: "¡Atención!",
                    html: "¿Estás seguro de eliminar la tarea seleccionada?<br>Ten en cuenta que esta acción es irreversible.",
                    icon: "warning",
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    showConfirmButton: true,
                    showCancelButton: true
                });

                if (isConfirmed) {
                    this.deleteOneTask(taskId);
                }
            },
            getPriorityText(priority) {
                let priorityText = '';

                switch(priority) {
                    case 0:
                        priorityText = 'Baja';
                    break;
                    case 1:
                        priorityText = 'Normal';
                    break;
                    case 2:
                        priorityText = 'Alta';
                    break;
                    case 3:
                        priorityText = 'Urgente';
                    break;
                }

                return priorityText;
            },
            updateTask() {
                this.updateOneTask(this.taskSelected);
            },
            openUpdateModal(task) {
                this.taskSelected = {...task};
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
            }
        },
        watch: {
            newTaskSaved(newValue) {
                if (newValue) {
                    this.newTask = {
                        title: '',
                        description: '',
                        priority: null,
                        status: null
                    };
                    this.$refs.Close.click();
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000);
                }
            },
            taskDeleted(newValue) {
                if (newValue) {
                    this.showSuccessMessage = true;

                    setTimeout(() => {
                        this.showSuccessMessage = false;
                    }, 5000);
                }
            }
        }
    };
</script>
