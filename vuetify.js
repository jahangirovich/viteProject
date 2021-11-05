import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const opts = {
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        blue: '#197DD9',
        blue2: '#00BCEA',
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
      },
    },
  },
}

Vue.use(Vuetify)

export default new Vuetify(opts)
