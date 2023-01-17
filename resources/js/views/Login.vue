<template>
    <div class="d-flex vh-100 align-items-center bg-light">
        <div class="container text-center">
            <h1 class="title mb-4">Iniciar sesión</h1>

            <form @submit.prevent="handleSubmit({ email, password })" class="d-flex flex-column align-items-center">
                <div class="mb-4 col-4 d-flex justify-content-center align-items-center">
                    <img src="/images/EnriqueCBH.png" style="width:180px">
                </div>

                <div class="mb-3 col-4">
                    <label for="inputEmail" class="form-label d-flex justify-content-start">Correo electrónico <i class="ps-1 text-danger">*</i></label>

                    <input
                        type="email"
                        v-model="email"
                        class="form-control"
                        id="inputEmail"
                        placeholder="Correo electrónico"
                    />
                </div>

                <div class="mb-5 col-4">
                    <label for="inputPassword" class="form-label d-flex justify-content-start">Contraseña <i class="ps-1 text-danger">*</i></label>

                    <input
                        type="password"
                        id="inputPassword"
                        v-model="password"
                        class="form-control"
                        placeholder="Contraseña"
                    />
                </div>

                <div class="col-4">
                    <button type="submit" class="btn btn-success">Ingresar</button>
                    <router-link to="register" class="btn btn-secondary">Registrarse</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapWaitingActions } from "vue-wait";

export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
        };
    },
    methods: {
        ...mapWaitingActions({
            handleSubmit: {
                action: "user/login",
                loader: "login",
            },
        }),
    },
    computed: {
        ...mapState({
            token: (state) => state.user.token,
            errors: (state) => state.user.errors,
        }),
    },
    watch: {
        token(newValue) {
            if (newValue) {
                this.$router.replace({ name: "home" });
            }
        },
        errors(newValue) {
            if (newValue.length > 0) {
                let text = "";

                newValue.forEach(error => text += `${error}<br>`);

                this.$swal.fire({
                    title: "Ocurrió un error",
                    html: text,
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        },
    },
};
</script>
