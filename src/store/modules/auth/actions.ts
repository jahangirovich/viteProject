import { isServerError } from '@/services/api/base.api'
import {
  AuthActionsTypes,
  AuthMutationTypes,
  AuthState,
} from '@/store/modules/auth/types'
import { RootState } from '@/store/rootStore'
import { ActionTree } from 'vuex'
import { tokenService } from '@/services/storages/storage.service'
import i18n from '@/i18n'
import { authApiService } from '@/services/api/auth/auth.service'

export const actions: ActionTree<AuthState, RootState> = {
  async [AuthActionsTypes.checkIsAuth]({ commit }) {
    const token = tokenService.getToken()
    if (token) {
      commit(AuthMutationTypes.setIsAuth, true)
    }
  },

  [AuthActionsTypes.authUserByCredentials]: async (
    { commit, rootGetters },
    { password, login }
  ) => {
    try {
      const result = await authApiService.login({ password, login })

      return result
    } catch (e) {
      if (isServerError(e)) {
        const message = {
          title:
            e.response?.data?.request_url || i18n.t('errors.serviceNotWorking.title'),
          description:
            e.response?.data?.request_url ||
            i18n.t('errors.serviceNotWorking.description'),
        }
      }
    }
  },
}
