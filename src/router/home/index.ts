import Main from '@/pages/Main/index.vue'
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
  const target_module = requireModule(filename).default || requireModule(filename)
  if (moduleName != 'index.ts') children.push(target_module)
})

const homeRoutes = {
  path: '/home',
  name: 'home',
  redirect: '/home/stalls',
  component: Main,
  children: [...children],
}

export default homeRoutes
