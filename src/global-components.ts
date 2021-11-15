import Vue from 'vue'

const components = {
  customHeader: () => import('@/components/Global/Header.vue'),
  subHeader: () => import('@/components/Global/Subheader.vue'),
}
Object.entries(components).forEach(([name, component]) => Vue.component(name, component))
