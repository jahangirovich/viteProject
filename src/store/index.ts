import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import modules from './modules'
import { actions, getters, mutations, RootState, state } from './rootStore'

Vue.use(Vuex)

const _store: StoreOptions<RootState> = {
  state,
  getters,
  actions,
  mutations,
  modules,
  plugins: [],
}

const store = new Vuex.Store(_store)

export default store
