import { MutationTree } from 'vuex'
import { RootState } from '@/store/rootStore/state'

const mutations: MutationTree<RootState> = {
  setCurrentModal: (state, payload: string) => {
    state.currentOpenModal = payload
  },
}

export { mutations }
