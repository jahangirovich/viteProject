import { VuetifyIcons } from 'vuetify/types/services/icons'

const requireModule = require.context('.', false, /\.vue$/)

const icons: Partial<VuetifyIcons> = {}

requireModule.keys().forEach((filename) => {
  const moduleName = filename.replace(/(\.\/|\.vue)/g, '')
  console.log(moduleName, 'moduleName')
  icons[moduleName] = {
    component: requireModule(filename).default || requireModule(filename),
  }
})

export default icons
