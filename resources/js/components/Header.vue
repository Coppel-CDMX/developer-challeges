<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 px-5 justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="/images/EnriqueCBC.png" style="width:100px;"/>
        </a>

        <div class="text-center">
            <a class="navbar-brand" href="#" @click.stop.prevent="logout">
                <img src="/images/logout.png" style="width:40px;margin-right:-30px;">
            </a>

            <p class="mt-1" style="font-weight:600;">{{ user.fullname }}</p>
        </div>
    </nav>
</template>

<script>
    import { mapState } from 'vuex';
    import { mapWaitingActions } from 'vue-wait';

    export default {
        name: 'Header',
        computed: {
            ...mapState({
                user: state => state.user.user
            })
        },
        methods: {
            ...mapWaitingActions({
                logout: {
                    action: 'user/logout'
                }
            })
        }
    }
</script>
