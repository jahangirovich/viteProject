// animals pages children
import Animals from '@/pages/Main/Animals/index.vue'
import CategoryComponent from '@/pages/Main/Animals/categories/index.vue'
import animal_groups from '@/pages/Main/Animals/categories/groups.vue'
import animal_lists from '@/pages/Main/Animals/categories/lists.vue'
// detail pages
import DescentDetailComponent from '@/pages/Main/Animals/details/categories/descent.vue'
import DevelopmentDetailComponent from '@/pages/Main/Animals/details/categories/development.vue'
import PosterityDetailComponent from '@/pages/Main/Animals/details/categories/posterity.vue'
import PregnancyDetailComponent from '@/pages/Main/Animals/details/categories/pregnancy.vue'
import ReproductionDetailComponent from '@/pages/Main/Animals/details/categories/reproduction.vue'
import AnalyzeDetailComponent from '@/pages/Main/Animals/details/categories/analyze.vue'
import MedicineCare from '@/pages/Main/Animals/details/categories/medicineCare.vue'
import AnimalProfile from '@/pages/Main/Animals/details/categories/profile.vue'
import Details from '@/pages/Main/Animals/details/index.vue'

// addition pages
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
        {
          path: 'descent',
          name: 'descent_profile',
          component: DescentDetailComponent,
        },
        {
          path: 'development',
          name: 'development_profile',
          component: DevelopmentDetailComponent,
        },
        {
          path: 'posterity',
          name: 'posterity_profile',
          component: PosterityDetailComponent,
        },
        {
          path: 'pregnancy',
          name: 'pregnancy_profile',
          component: PregnancyDetailComponent,
        },
        {
          path: 'reproduction',
          name: 'reproduction_profile',
          component: ReproductionDetailComponent,
        },
        {
          path: 'analyze',
          name: 'analyze_profile',
          component: AnalyzeDetailComponent,
        },
        {
          path: 'med_health',
          name: 'med_health_profile',
          component: MedicineCare,
        },
      ],
    },
  ],
}

export default route
