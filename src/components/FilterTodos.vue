<template>
    <div class="filter">
        <div>Show Entries</div>
        <select @change="myFilter($event)">
            <option value="all">All</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="25">25</option>
            <option value="10">10</option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilterTodos',
    methods: {
        ...mapActions(['filterTodos']),
        myFilter(e) {
            this.filterTodos(e.target.value)
        }
    } 
}
</script>

<style>
    .filter {
        display: flex;
        min-width: 150px;   
        margin-top: 1rem;
    }
    .filter select {
        margin-left: 1rem;
        min-width: 80px;
        border-radius: 4px;
        padding: 4px 10px;
        outline: none;
        border: 1px solid #b1b1b1;
    }

</style>