<template>
    <div>
        <h3>Add Todo</h3>
        <form @submit.prevent="submitHandler">
            <input type="text" placeholder="Add title..." v-model="title">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: "AddTodo",
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        submitHandler() {
            this.addTodo(this.title)
        }
    }
}
</script>

<style>
    input {
        padding: 8px 10px;
        min-width: 200px;
        border: 1px solid #b1b1b1;
        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        outline: none;
        margin: 0;
    }
    input:focus {
        border: 1px solid #2387ca;
    }
    button {
        margin: 0;
        padding: 8px 10px;
        border: 1px solid #b1b1b1;
        border-radius: 4px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        outline: none;
        background-color: #2387ca;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }
    button:hover {
        background-color: #167dc2;
    }
</style>