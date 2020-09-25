<template>
   <div>
       <h3>TODOS</h3>
       <div class="todo-container">
           <div v-for="todo in allTodos" :key="todo.id" class="todo">
               {{ todo.title }} 
               <i class="fas fa-trash-alt" style="color: #eb244f" @click="deleteTodo(todo.id)"></i>
           </div>
       </div>
    </div> 
</template>

<script>
// use mapGetters to use getters in module vuex
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Todos",
    methods: {
        ...mapActions(['getAllTodos', 'deleteTodo']),
        // hapusTodo(id) {
        //     this.deleteTodo(id)
        // }
    },
    computed: {
        ...mapGetters(['allTodos'])
    },
    created() {
        this.getAllTodos()
    }
}
</script>

<style scoped>
    .todo-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        border: 1px solid #17d8b8;
        background-color: white;
        padding: 1rem;
        border-radius: 4px;
        cursor: pointer;
    }
    .todo .fas {
        margin-left: 10px;
    }
</style>