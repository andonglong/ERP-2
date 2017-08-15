import Vue from 'vue'
import Router from 'vue-router'

// import Hello from '@/components/Hello'
import NotFound from '../components/404.vue'

// import Login from '../components/login/login.vue'
import Home from '../components/Home.vue'
import Employee from '../components/Employee/Employee.vue'
import Customter from '../components/Customer/Customer.vue'
import Equipment from '../components/equipment/Equipment.vue'
import EquipmentList from '../components/equipmentList/EquipmentList.vue'

Vue.use(Router)

const routes = [
  // {
  //   path: '/',
  //   name: 'Login',
  //   component: Login
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Employee',
    name: 'Employee',
    component: Employee
  },
   {
    path: '/Customer',
    name: 'Customer',
    component: Customter
  },
   {
    path: '/Equipment',
    name: 'Equipment',
    component: Equipment
  },
   {
    path: '/EquipmentList',
    name: 'EquipmentList',
    component: EquipmentList
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
