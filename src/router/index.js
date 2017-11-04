import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Dashboard from '../components/Dashboard.vue'
import Signin from '../components/Signin.vue'
import Register from '../components/Register.vue'
import { store }  from '../store/store'

export default new Router({
  routes: [
      {
        path: '/dashboard',
        component: Dashboard,
      },
      {
        path: '/login',
        component: Signin,
      },
      {
          path: '/register',
          component: Register,
      }
  ]
})
