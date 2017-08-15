// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import VueRouter from 'vue-router'
import 'iview/dist/styles/iview.css'
import router from './router/router.js'  // 路由列表
import api from './api/request.js'
import axios from 'axios'

// Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter)
/* eslint-disable no-new */
Vue.prototype.$api = api
Vue.prototype.$axios = axios
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
