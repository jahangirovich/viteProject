import Vue from 'vue'
import VCA from '@vue/composition-api'
import i18n from './i18n'
import router from './router'
import store from './store'
import App from './App.vue'
import vuetify from '@/plugins/vuetify.js'
import '@/plugins/vuelidate'

Vue.use(VCA)

Vue.config.productionTip = false

Vue.config.productionTip = false

Vue.config.devtools = process.env.NODE_ENV === 'development'

new Vue({
  render: (h) => h(App),
  router,
  store,
  vuetify,
  i18n,
}).$mount('#app')
