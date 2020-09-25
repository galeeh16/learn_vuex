import Vue from 'vue';
import Vuex from 'vuex';

// Modules vuex 
import todos from './modules/todos';
import users from './modules/users';
import albums from './modules/albums.js';
import todos_dua from './modules/todos_dua';

// Load Vuex 
Vue.use(Vuex);

// Create store 
export default new Vuex.Store({
    modules: {
        todos,
        users,
        albums,
        todos_dua
    }
})