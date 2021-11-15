import Main from '@/pages/Main/index.vue'
import { ModuleTree } from 'vuex'
import { RootState } from '@/store/rootStore'
import { Component } from 'vue'

const requireModule = require.context('.', true, /\.ts$/)

type fileType = {
  name: string
  path: string
  component: Component
  children?: fileType[]
}

const children: Array<fileType> = []

requireModule.keys().forEach((filename) => {
  const moduleName = filename.replace(/(\.\/|\.index\.ts)/g, '')
  if (moduleName != 'index.ts')
    children.push(requireModule(filename).default || requireModule(filename))
})

const homeRoutes = {
  path: '/home',
  name: 'home',
  redirect: '/home/stalls',
  component: Main,
  children: [...children],
}

export default homeRoutes
