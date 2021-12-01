import { DTOReqLogin, DTOReqSignUp } from '@/services/api/auth/auth.dto'
import { ComponentInstance } from '@vue/composition-api/dist/component'
import { Store } from 'vuex'

type authFuncType = {
  $store: Store<unknown>
  login: (e: Event, formData: DTOReqLogin) => void
  signUp: (e: Event, formData: DTOReqSignUp) => void
}

export default function useAuth(root: ComponentInstance): authFuncType {
  const $store = root.$store

  const login = function (e: Event, formData: DTOReqLogin): void {
    e.preventDefault()
  }

  const signUp = function (e: Event, formData: DTOReqSignUp): void {
    e.preventDefault()
  }

  return { $store, login, signUp }
}
