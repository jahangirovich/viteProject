import Vue from 'vue'

import { ModuleTree } from 'vuex'
import { RootState } from '@/store/rootStore'

const requireModule = require.context('./components/Global', true, /.*.vue/)

const modules: ModuleTree<RootState> = {}

requireModule.keys().forEach((filename) => {
  const component = requireModule(filename).default || requireModule(filename)
  // setting name of component
  modules[component.name ? component.name : filename] = component
})

Object.entries(modules).forEach(([name, component]) => {
  // console.log(name, component)
  Vue.component(name, component)
})
