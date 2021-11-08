import { RootState } from '@/store/rootStore'
import { GetterTree } from 'vuex'

export const getters: GetterTree<RootState, RootState> = {
  currentModal: (state) => state.currentOpenModal,
}
