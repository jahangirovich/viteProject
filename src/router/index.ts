import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoute from './auth/'
import homeRoutes from './home'

Vue.use(VueRouter)

const routes = [
  {
    ...authRoute,
  },
  {
    ...homeRoutes,
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
