<template>
    <div>
        <h3>List users</h3>
        <ul>
            <li v-for="user in allUsers" v-bind:key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ListUsers',
    computed: {
        ...mapGetters(['allUsers'])
    },
    methods: {
        ...mapActions(['getAllUsers'])
    },
    created() {
        this.getAllUsers()
    }
}
</script>

<style>
</style>