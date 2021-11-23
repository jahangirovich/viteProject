import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'
import { UserVuetifyPreset } from 'vuetify/types/services/presets'
import icons from '../components/icons/index'

const opts: Partial<UserVuetifyPreset> = {
  icons: {
    iconfont: 'mdiSvg',
    values: {
      ...icons,
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

Vue.use(Vuetify, {
  directives: {
    Ripple,
  },
})

export default new Vuetify(opts)
