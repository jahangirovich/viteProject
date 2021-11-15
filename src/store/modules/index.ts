import { ModuleTree } from 'vuex'
import { RootState } from '@/store/rootStore'

const requireModule = require.context('.', false, /\.module\.ts$/)

const modules: ModuleTree<RootState> = {}

requireModule.keys().forEach((filename) => {
  const moduleName = filename.replace(/(\.\/|\.module\.ts)/g, '')
  modules[moduleName] = requireModule(filename).default || requireModule(filename)
})

export default modules
