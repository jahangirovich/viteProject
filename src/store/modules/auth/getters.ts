import { AuthGettersTypes, AuthState } from '@/store/modules/auth/types'
import { RootState } from '@/store/rootStore'
import { GetterTree } from 'vuex'
export const getters: GetterTree<AuthState, RootState> = {
  [AuthGettersTypes.isAuth]: (state): boolean => state.isAuth,

  [AuthGettersTypes.userFullName](state): string {
    return state.currentUser
      ? `${state.currentUser.firstName} ${state.currentUser.lastName} ${state.currentUser.middleName}`
      : ''
  },

  [AuthGettersTypes.userPhone](state): string | null {
    return state.currentUser?.phone ?? null
  },
}
