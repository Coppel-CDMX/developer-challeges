import axios from "axios";
import jwtDecode from "jwt-decode";
import { _TOKEN } from "../../config";

const user = {
    namespaced: true,
    state: {
        user: {},
        errors: [],
        token: localStorage.getItem(_TOKEN) || ''
    },
    mutations: {
        cleanErrors(state) {
            state.errors = [];
        },
        authenticated(state, { data }) {
            localStorage.setItem(_TOKEN, data.token);
            state.token = data.token;
            axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            axios.defaults.headers.common.Accept = 'application/json';
        },
        removeSession(state) {
            localStorage.removeItem(_TOKEN);
            state.token = null;
            axios.defaults.headers.common.Authorization = '';
        },
        user(state, user) {
            state.user = user;
        },
        errorResponse(state, { response }) {
            response && response.data.error
                ? state.errors = [...state.errors, response.data.error]
                : state.errors = ['Ocurrió un error'];
        }
    },
    actions: {
        async login({ commit }, params) {
            commit('cleanErrors');

            try {
                const response = await axios.post('/api/signin', params);
                commit('authenticated', response);
            } catch(error) {
                commit('errorResponse', error);
            }
        },
        async logout({ commit }) {
            commit('removeSession');
        },
        parseToken({ commit, state }) {
            try {
                const data = jwtDecode(state.token);
                commit('user', data);
            } catch(error) {
                commit('errorResponse', error);
            }
        }
    }
};

export default user;
