import Auth from '@/pages/Auth/index.vue'
import Login from '@/pages/Auth/Login.vue'
import Registration from '@/pages/Auth/Registration.vue'

const authRoute = {
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
}

export default authRoute
