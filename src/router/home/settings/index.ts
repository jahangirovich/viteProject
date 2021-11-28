import Settings from '@/pages/Main/Settings/index.vue'
import EditArea from '@/pages/Main/Settings/areas/edit.vue'
import AddArea from '@/pages/Main/Settings/areas/add.vue'
import DetailArea from '@/pages/Main/Settings/areas/details.vue'
import Bridge from '@/components/Global/Bridge.vue'

const routes = {
  path: 'settings',
  name: 'settings',
  component: Bridge,
  children: [
    {
      path: '/',
      name: 'bridge',
      component: Settings,
    },
    {
      path: 'area/edit',
      name: 'edit_area',
      component: EditArea,
    },
    {
      path: 'area/add',
      name: 'add_area',
      component: AddArea,
    },
    {
      path: 'area/detail',
      name: 'detail_area',
      component: DetailArea,
    },
  ],
}

export default routes
