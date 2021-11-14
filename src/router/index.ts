import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '@/pages/Auth/index.vue'
import Login from '@/pages/Auth/Login.vue'
import Main from '@/pages/Main/index.vue'
import Stalls from '@/pages/Main/Stalls/index.vue'
import Registration from '@/pages/Auth/Registration.vue'
import Animals from '@/pages/Main/Animals/index.vue'
import Calendar from '@/pages/Main/Calendar/index.vue'
import Analytics from '@/pages/Main/Analytics/index.vue'
import Settings from '@/pages/Main/Settings/index.vue'
import Users from '@/pages/Main/Users/index.vue'
import Operations from '@/pages/Main/Operations/index.vue'
import animal_groups from '@/pages/Main/Animals/categories/groups.vue'
import animal_lists from '@/pages/Main/Animals/categories/lists.vue'

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
      {
        path: 'animals',
        name: 'animals',
        redirect: '/home/animals/lists',
        component: Animals,
        children: [
          {
            path: 'groups',
            name: 'animal_groups',
            component: animal_groups,
          },
          {
            path: 'lists',
            name: 'animal_lists',
            component: animal_lists,
          },
        ],
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: Calendar,
      },
      {
        path: 'operations',
        name: 'operations',
        component: Operations,
      },
      {
        path: 'users',
        name: 'users',
        component: Users,
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings,
      },
      {
        path: 'analytics',
        name: 'analytics',
        component: Analytics,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
