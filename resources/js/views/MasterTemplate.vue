<template>
    <div>
        <div class="content">
            <Header />

            <main>
                <div class="container-fluid px-4">
                    <div class="row">
                        <div class="col-1"></div>
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
