import axios from "axios";

const taskStatus = {
    namespaced: true,
    state: {
        status: null,
        statuses: [],
        errors: []
    },
    mutations: {
        cleanErrors(state) {
            state.errors = [];
        },
        setItem(state, data) {
            state.status = data;
        },
        setItems(state, data) {
            state.statuses = data;
        },
        setErrors(state, { response }) {
            if (response.data.error) {
                state.errors = [...state.errors, response.data.error];
            } else if (response.data.errors) {
                const errors = JSON.parse(response.data.errors);

                for (const prop in errors) {
                    errors[prop].forEach(error => state.errors = [...state.errors, error]);
                }
            } else {
                state.errors = ['Ocurrió un error'];
            }
        }
    },
    actions: {
        async getAll({ commit }, params) {
            commit('setItems', []);

            try {
                const { data } = await axios.get('/api/tasks-statuses', { params });
                commit('setItems', data);
            } catch (errors) {
                commit('setErrors', errors);
            }
        }
    }
};

export default taskStatus;
