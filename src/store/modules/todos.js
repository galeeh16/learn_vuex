import axios from 'axios'

const state = {
    todos: []
};

// to get this state in are todos component to display we need add to getter
const getters = {
    allTodos: (state) => {
        return state.todos; 
    }
};

const actions = {
    async getAllTodos({ commit }) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
        const data = response.data;
        // commit = manggil mutations dimana mutations digunakan utk melakukan perubahan pada state
        // parameter pertama adalah nama mutations lalu yang kedua adalah datanya
        commit('setTodos', data);
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('http://jsonplaceholder.typicode.com/todos', {
            completed: false,
            title: title
        });
        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, value) {
        let limit = value != 'all' ? '_limit=' + parseInt(value) : '';
        const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?${limit}`);
        const data = response.data;
        console.log(data)
        console.log(`http://jsonplaceholder.typicode.com/todos?${limit}`)
        commit('setTodos', data);
    }
};

const mutations = {
    setTodos: (state, todos) => {
        return state.todos = todos;
    },
    newTodo: (state, todo) => {
        return state.todos.unshift(todo)
    },
    removeTodo: (state, id) => {
        return state.todos = state.todos.filter(todo => todo.id != id)
    }
};

export default {
    // state: state 
    state,
    getters,
    actions,
    mutations
}