import Stalls from '@/pages/Main/Stalls/index.vue'
import Category from '@/pages/Main/Stalls/categories/index.vue'
import ArchiveCategory from '@/pages/Main/Stalls/categories/archive.vue'
import ActiveCategory from '@/pages/Main/Stalls/categories/active.vue'
import StallEdit from '@/pages/Main/Stalls/actions/edit.vue'
import StallAdd from '@/pages/Main/Stalls/actions/add.vue'

const route = {
  path: 'stalls',
  name: 'stalls',
  component: Stalls,
  redirect: '/home/stalls/active',
  children: [
    {
      path: '/',
      name: 'bridge',
      component: Category,
      redirect: '/home/stalls/active',
      children: [
        {
          path: 'active',
          name: 'stall_active',
          component: ActiveCategory,
        },
        {
          path: 'archive',
          name: 'stall_archive',
          component: ArchiveCategory,
        },
      ],
    },
    {
      path: ':id/edit',
      name: 'stall_edit_id',
      component: StallEdit,
    },
    {
      path: 'add',
      name: 'stall_add',
      component: StallAdd,
    },
  ],
}

export default route
