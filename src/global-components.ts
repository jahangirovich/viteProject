import Vue from 'vue'

const components = {
  customHeader: () => import('@/components/Global/Header.vue'),
}
Object.entries(components).forEach(([name, component]) => Vue.component(name, component))
