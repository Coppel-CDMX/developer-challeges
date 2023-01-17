<template>
    <div>
        <div class="content">
            <Header />

            <main>
                <div class="container-fluid px-4">
                    <div class="row">
                        <div class="col-2">
                            <div class="bg-light py-3 px-3 mt-3">
                                <h3 class="title text-center">Menú</h3>

                                <hr>

                                <div class="mb-3">
                                    <h5>Páginas</h5>

                                    <ul class="list-group list-group-flush">
                                        <router-link to="/" class="link-dark text-decoration-none list-group-item list-group-item-action bg-light">
                                            <b-icon icon="house-door" class="me-1"></b-icon> Inicio
                                        </router-link>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <router-view class="col-10"></router-view>
                    </div>
                </div>
            </main>
        </div>

        <PageLoader
            v-if="$wait.any && !$wait.is('skip*')"
            v-on:closeLoader="closeLoader"
            v-on:openLoader="openLoader"
        />
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import Header from '../components/Header.vue';
    import PageLoader from '../components/PageLoader.vue';

    export default {
        name: 'MasterTemplate',
        components: {
            Header,
            PageLoader
        },
        data() {
            return {};
        },
        mounted() {
            this.getUserData();
        },
        computed: {
            ...mapState({
                user: state => state.user.user,
                token: state => state.user.token
            })
        },
        methods: {
            ...mapActions({
                getUserData: 'user/parseToken'
            }),
            closeLoader() {},
            openLoader() {}
        },
        watch: {
            token(newValue) {
                if (!newValue) {
                    this.$router.replace({ name: 'login' });
                }
            }
        }
    };
</script>
