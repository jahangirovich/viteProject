import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main/index.vue'
import Stalls from '@/pages/Main/Stalls/index.vue'
import Animals from '@/pages/Main/Animals/index.vue'
import Calendar from '@/pages/Main/Calendar/index.vue'
import Analytics from '@/pages/Main/Analytics/index.vue'
import Settings from '@/pages/Main/Settings/index.vue'
import Users from '@/pages/Main/Users/index.vue'
import Operations from '@/pages/Main/Operations/index.vue'
import animal_groups from '@/pages/Main/Animals/categories/groups.vue'
import animal_lists from '@/pages/Main/Animals/categories/lists.vue'
import authRoute from './auth/'
import homeRoutes from './home'

Vue.use(VueRouter)

const routes = [
  {
    ...authRoute,
  },
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    ...homeRoutes,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
