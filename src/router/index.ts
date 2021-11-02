import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../layouts/Auth/index.vue'
import Login from '../layouts/Auth/Login.vue'
import Registration from '../layouts/Auth/Registration.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
      {
        path: 'registration',
        name: 'registration',
        component: Registration,
      },
    ],
  },
  {
    path: '/',
    redirect: '/auth/login',
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
