import Vue from 'vue'

const components = {
  customHeader: () => import('@/components/Global/Header.vue'),
  subHeader: () => import('@/components/Global/Subheader.vue'),
  AnimalStatus: () => import('@/components/Global/AnimalStatus.vue'),
  LabelWithInfo: () => import('@/components/Global/LabelWithInfo.vue'),
  ListComponent: () => import('@/components/Global/ListComponent.vue'),
  ArchiveModal: () => import('@/components/Global/Modals/Archive.vue'),
  RemoveModal: () => import('@/components/Global/Modals/Remove.vue'),
  PropertyComponent: () => import('@/components/Global/Property.vue'),
  ListAreas: () => import('@/components/Global/ListAreas.vue'),
}
Object.entries(components).forEach(([name, component]) => Vue.component(name, component))
