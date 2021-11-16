import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import analytics from '../components/icons/analytics.vue'
import animals from '../components/icons/animals.vue'
import operations from '../components/icons/operations.vue'
import settings from '../components/icons/settings.vue'
import calendar from '../components/icons/calendar.vue'
import stalls from '../components/icons/stalls.vue'
import users from '../components/icons/users.vue'

const opts = {
  icons: {
    iconfont: 'mdiSvg',
    values: {
      analytics: {
        component: analytics,
      },
      animals: {
        component: animals,
      },
      calendar: {
        component: calendar,
      },
      operations: {
        component: operations,
      },
      settings: {
        component: settings,
      },
      stalls: {
        component: stalls,
      },
      users: {
        component: users,
      },
    },
  },
  theme: {
    themes: {
      light: {
        accent: '#197DD9',
        accent_secondary: '#00BCEA',
        primary: '#051F37',
        dividers: '#242E50',
        gray_secondary: '#888C96',
        gray: '#C2C2C2',
        input_borders: '#D7D7D7',
        borders: '#E7E7E7',
        bg: '#F1F2F5',
        bg2: '#EFF8FF',
        white: 'white',
        success: '#19A627',
        success_bg: '#D8F4DB',
        error: '#D91919',
        error_bg: '#FED7D7',
        navigation_background: '#062D4D',
      },
    },
  },
}

Vue.use(Vuetify)

export default new Vuetify(opts)
