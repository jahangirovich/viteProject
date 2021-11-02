<template>
  <div class="main">
    <v-container fluid class="p-0">
      <div class="auth-header">
        <v-img :src="require('../../assets/auth/cowmas_logo.svg')"> </v-img>
        <div class="font-weight-light text-white text-center">
          Платформа для мониторинга и  аналитики данных в  животноводстве
        </div>
      </div>
      <div class="rounded-lg shadow-md bg-white overflow-hidden">
        <v-tabs v-model="model" align-with-title centered slider-color="blue" grow>
          <v-tab v-for="(item, i) in items" :key="i" :to="item.link">
            {{ item.name }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="model">
          <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: 'Войти',
        link: '/auth/login',
      },
      {
        name: 'Регистрация',
        link: '/auth/registration',
      },
    ])

    return { items }
  },
  data() {
    return {
      model: this.$route.path.name,
    }
  },
})
</script>

<style lang="scss">
@import '../../sass/variables.scss';
@import '../../sass/style.scss';
</style>
