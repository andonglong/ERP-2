import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import NotFound from '../components/404.vue'

import Login from '../components/login/login.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  },
  { path: '*', component: NotFound }
]

export default new Router({
  mode: 'history',
  routes
})
