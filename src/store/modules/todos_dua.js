import axios from 'axios';

const state = {
    todos_dua: []
};

const getters = {
    allTodosDua: (state) => {
        return state.todos_dua
    }
};

const actions = {
    async getAllTodosDua({ commit }) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos')
        const data = response.data 
        commit('setTodosDua', data)
    }
};

const mutations = {
    setTodosDua: (state, data) => {
        return state.todos_dua = data;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}