<template>
	
	<div id="app">
		<div class="container">
			<div style="display: flex;">
				<router-link to="/" style="margin-right: 16px;">Home</router-link>
				<router-link to="/users" style="margin-right: 16px;">Users</router-link>
				<router-link to="/albums" style="margin-right: 16px;">Albums</router-link>
				<router-link to="/todos_dua">Todos Dua</router-link>
			</div>
			<router-view>
				<AddTodo />
				<FilterTodos />
				<Todos/>
			</router-view>
		</div>
	</div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import FilterTodos from './components/FilterTodos';

export default {
	name: 'App',
	components: {
		AddTodo,
		Todos,
		FilterTodos
	}
}
</script>

<style>
	body {
		font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		line-height: 1.6;
		background-color: #f8f9fe;
	}

	.container {
		max-width: 1100px;
		margin: auto;
		overflow: auto;
		padding: 0 2rem;
	}
</style>
