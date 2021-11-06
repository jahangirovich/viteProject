import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../pages/Auth/index.vue'
import Login from '../pages/Auth/Login.vue'
import Main from '../pages/Main/index.vue'
import Stalls from '../pages/Main/Stalls.vue'
import Registration from '../pages/Auth/Registration.vue'

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
  {
    path: '/home',
    name: 'home',
    redirect: '/home/stalls',
    component: Main,
    children: [
      {
        path: 'stalls',
        name: 'stalls',
        component: Stalls,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
