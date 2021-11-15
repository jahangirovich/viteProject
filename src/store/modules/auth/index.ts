import { actions } from '@/store/modules/auth/actions'
import { mutations } from '@/store/modules/auth/mutations'
import { state } from '@/store/modules/auth/state'
import { getters } from '@/store/modules/auth/getters'

export default {
  namespaced: true,
  actions,
  mutations,
  state,
  getters,
}
