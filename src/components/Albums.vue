<template>
    <div>
        <h3>Todos Dua</h3>
        <ul>
            <li v-for="todo in allAlbums" v-bind:key="todo.id">
                {{ todo.title }} <i class="fas fa-trash-alt" style="margin-left: 10px; color: red; cursor: pointer;" @click="deleteAlbum(todo.id)"></i>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Albums',
    computed: {
        ...mapGetters(['allAlbums'])
    },
    methods: {
        ...mapActions(['getAllAlbums', 'deleteAlbum'])
    },
    created() {
        this.getAllAlbums()
    }
}
</script>

<style>

</style>