import axios from 'axios';

const state = {
    albums: []
};

const getters = {
    allAlbums: (state) => {
        return state.albums
    }
};

const actions = {
    async getAllAlbums({ commit }) {
        const response = await axios.get('http://jsonplaceholder.typicode.com/albums')
        const data = response.data 
        commit('setAlbums', data)
    },
    async deleteAlbum({ commit }, id) {
        await axios.delete(`http://jsonplaceholder.typicode.com/albums/${id}`);
        commit('removeAlbum', id);
    }
};

const mutations = {
    setAlbums: (state, data) => {
        return state.albums = data;
    },
    removeAlbum: (state, id) => {
        return state.albums = state.albums.filter(album => album.id !== id);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}