import axios from 'axios';

const state = {
    users: []
}

// to get this state in are todos component to display we need add to getters
const getters = {
    allUsers: (state) => {
        return state.users;
    } 
};

const actions = {
    async getAllUsers({ commit }) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/users')
        const data = response.data
        commit('setUsers', data);
    } 
};

const mutations = {
    setUsers: (state, users) => {
        state.users = users;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}