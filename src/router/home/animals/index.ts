import animal_groups from '@/pages/Main/Animals/categories/groups.vue'
import animal_lists from '@/pages/Main/Animals/categories/lists.vue'
import Animals from '@/pages/Main/Animals/index.vue'

const route = {
  path: 'animals',
  name: 'animals',
  redirect: '/home/animals/lists',
  component: Animals,
  children: [
    {
      path: 'groups',
      name: 'animal_groups',
      component: animal_groups,
    },
    {
      path: 'lists',
      name: 'animal_lists',
      component: animal_lists,
    },
  ],
}

export default route
