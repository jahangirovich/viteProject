import Vue from 'vue';
import App from './App.vue';
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vuetify from '../vuetify' // path to vuetify export

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueCompositionAPI)

new Vue({
  render: (h) => h(App),
  vuetify
}).$mount('#app');