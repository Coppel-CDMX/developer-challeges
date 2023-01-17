import axios from "axios";

const task = {
    namespaced: true,
    state: {
        task: null,
        tasks: [],
        errors: [],
        taskSaved: false,
        taskDeleted: false
    },
    mutations: {
        cleanErrors(state) {
            state.errors = [];
        },
        setItem(state, data) {
            state.task = data;
        },
        setItems(state, data) {
            state.tasks = data;
        },
        setSaved(state, data) {
            state.taskSaved = data;
        },
        setDeleted(state, data) {
            state.taskDeleted = data;
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
                const { data } = await axios.get('/api/tasks', { params });
                commit('setItems', data);
            } catch (errors) {
                commit('setErrors', errors);
            }
        },
        async getOne({ commit }, params) {
            commit('setItems', []);

            try {
                const { data } = await axios.get(`/api/tasks/${params.taskId}`, { params });
                commit('setItem', data);
            } catch (errors) {
                commit('setErrors', errors);
            }
        },
        async insertOne({ commit, dispatch }, params) {
            commit('setSaved', false);

            try {
                const { data } = await axios.post('/api/tasks', params);
                dispatch('getAll', data);
                commit('setSaved', true);
            } catch (errors) {
                commit('setErrors', errors);
            }
        },
        async updateOne({ commit, dispatch }, params) {
            commit('setSaved', false);

            try {
                const { data } = await axios.put(`/api/tasks/${params.taskId}`, params);
                dispatch('getAll', data);
                commit('setSaved', true);
            } catch (errors) {
                commit('setErrors', errors);
            }
        },
        async deleteOne({ commit, dispatch }, taskId) {
            commit('setDeleted', false);

            try {
                const { data } = await axios.delete(`/api/tasks/${taskId}`);
                dispatch('getAll', data);
                commit('setDeleted', true);
            } catch (errors) {
                commit('setErrors', errors);
            }
        }
    }
};

export default task;
