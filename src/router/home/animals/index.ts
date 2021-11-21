import animal_groups from '@/pages/Main/Animals/categories/groups.vue'
import animal_lists from '@/pages/Main/Animals/categories/lists.vue'
import Animals from '@/pages/Main/Animals/index.vue'
import Details from '@/pages/Main/Animals/details/index.vue'
import AnimalProfile from '@/pages/Main/Animals/details/categories/profile.vue'
import CategoryComponent from '@/pages/Main/Animals/categories/index.vue'
import AnimalAddition from '@/pages/Main/Animals/addition/index.vue'
import AdditionAnimalProfile from '@/pages/Main/Animals/addition/profile.vue'

const route = {
  path: 'animals',
  name: 'animals',
  redirect: '/home/animals/lists',
  component: Animals,
  children: [
    {
      path: '/',
      name: 'bridge',
      component: CategoryComponent,
      redirect: '/home/animals/lists',
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
    },
    {
      path: 'addition',
      name: 'animal_addition',
      component: AnimalAddition,
      redirect: '/home/animals/addition/profile',
      children: [
        {
          path: 'profile',
          name: 'animal_addition_profile',
          component: AdditionAnimalProfile,
        },
      ],
    },
    {
      path: 'details/:id',
      name: 'animal_id',
      component: Details,
      children: [
        {
          path: 'profile',
          name: 'animal_profile',
          component: AnimalProfile,
        },
      ],
    },
  ],
}

export default route
