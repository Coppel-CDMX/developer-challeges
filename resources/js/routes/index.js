import Vue from "vue";
import axios from "axios";
import VueRouter from "vue-router";
import { _TOKEN } from '../config';
import GuardLoggedIn from '../guard/loggedIn';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../views/MasterTemplate.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('../views/Home.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach(GuardLoggedIn);

let token = null;

if (token = localStorage.getItem(_TOKEN)) {
    axios.defaults.headers.common.Authorization = `Bearer ${ token }`;

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (401 === error.response.status) {
                localStorage.removeItem(_TOKEN);
                router.replace('/login');
            } else {
                return Promise.reject(error);
            }
        }
    );
}

export default router;
