import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// Import strore
// import store from './store/index';
import store from './store';

import Users from './components/Users';
import Todos from './components/Todos';
import Albums from './components/Albums';
import TodosDua from './components/TodosDua';

Vue.config.productionTip = false

Vue.use(VueRouter)

// vue router 
const routes = [
    {	
      path: '/todos_dua',
      component: TodosDua
    },
    {	
      path: '/albums',
      component: Albums
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/',
      component: Todos
    },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
