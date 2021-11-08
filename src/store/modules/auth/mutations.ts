import { AuthMutationTypes, AuthState } from '@/store/modules/auth/types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<AuthState> = {
  [AuthMutationTypes.setIsAuth]: (state: AuthState, { isAuth }: { isAuth: boolean }) => {
    state.isAuth = isAuth
  },
}

export { mutations }
