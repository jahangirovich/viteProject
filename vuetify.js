import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#197DD9',
      },
      dark: {
        blue: '#197DD9',
      },
    },
  },
}

export default new Vuetify(opts)
