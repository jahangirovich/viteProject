import Vue from 'vue'
import i18n from './i18n'
import router from './router'
import store from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import './plugins/vuelidate'
import './plugins/composition-api'
// import 'windi.css'
import './styles/main.scss'
import './global-components'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
  i18n,
}).$mount('#app')
