import { DTOReqLogin, DTOReqSignUp, DTOResLogin } from '@/services/api/auth/auth.dto'
import { AuthActionsTypes } from '@/store/modules/auth/types'
import { ComponentInstance } from '@vue/composition-api/dist/component'
import { Store } from 'vuex'

type authFuncType = {
  $store: Store<unknown>
  login: (formData: DTOReqLogin) => Promise<DTOResLogin | string>
  signUp: (formData: DTOReqSignUp) => Promise<any>
}

export default function useAuth(root: ComponentInstance): authFuncType {
  const $store = root.$store

  const login = async function (formData: DTOReqLogin) {
    return await $store.dispatch(
      'auth/' + AuthActionsTypes.authUserByCredentials,
      formData
    )
  }

  const signUp = async function (formData: DTOReqSignUp) {
    return await $store.dispatch('auth/' + AuthActionsTypes.signUp, formData)
  }

  return { $store, login, signUp }
}

export const tabLinks = (function () {
  return [
    {
      name: 'Войти',
      link: '/auth/login',
      link_name: 'login',
    },
    {
      name: 'Регистрация',
      link: '/auth/registration',
      link_name: 'registration',
    },
  ]
})()
