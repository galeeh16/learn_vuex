<template>
    <div>
        <h3>Todos Dua</h3>
        <ul>
            <li v-for="todo in allTodosDua" v-bind:key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TodosDua',
    computed: {
        ...mapGetters(['allTodosDua'])
    },
    methods: {
        ...mapActions(['getAllTodosDua'])
    },
    created() {
        this.getAllTodosDua()
    }
}
</script>

<style>

</style>