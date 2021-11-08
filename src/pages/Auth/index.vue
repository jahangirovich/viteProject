<template>
  <v-app>
    <v-main class="auth main">
      <v-container fluid class="main_mobile-block bg-blue">
        <div class="p-0 d-flex flex-col">
          <div class="main_auth-header main_header text-center my-7">
            <v-img :src="require('@/assets/img/auth/cowmas_logo.svg')"> </v-img>
            <div class="font-weight-light text-white text-center mt-5">
              Платформа для мониторинга <br />
              и аналитики данных <br />
              в животноводстве
            </div>
          </div>
          <v-card class="rounded-lg shadow-md overflow-hidden main_body">
            <v-tabs v-model="model" centered fixed-tabs>
              <v-tabs-slider class="blue"></v-tabs-slider>
              <v-tab
                v-for="(item, i) in items"
                :key="i"
                :to="item.link"
                :class="
                  $route.name === item.link_name ? 'blue--text' : 'gray_secondary--text'
                "
              >
                <span class="font-600">{{ item.name }}</span>
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="model">
              <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
                <transition name="fade" mode="out-in">
                  <router-view :key="$route.path"></router-view>
                </transition>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          <div class="main_footer align-content-end text-center">
            <h2 class="font-600 text-14px white--text uppercase mt-sm-9 mb-sm-5">
              Техническая поддержка
            </h2>
            <div class="phone my-sm-3">+7 (707) 902-34-56</div>
            <div class="phone underline my-sm-3">support.cowmas.com</div>
          </div>
        </div>
      </v-container>
      <div class="main_desktop-block">
        <div class="d-flex">
          <div
            class="
              main_desktop-block_leftSide
              bg-blue
              px-12
              pb-6
              d-flex
              flex-col
              justify-between
            "
          >
            <div class="text-center my-7">
              <v-img
                :src="require('@/assets/img/auth/cowmas_logo.svg')"
                alt="Cowmas"
                class="logo"
              >
              </v-img>
              <div class="font-weight-light text-white text-left mt-5">
                Платформа для мониторинга и аналитики данных в животноводстве
              </div>
            </div>
            <div>
              <v-img :src="require('@/assets/img/auth/cowmasBanner.png')"></v-img>
            </div>
            <div class="main_footer align-content-end text-left">
              <h2 class="font-600 text-14px white--text uppercase">
                Техническая поддержка
              </h2>
              <div class="phone text-14px my-1">+7 (707) 902-34-56</div>
              <div class="phone text-14px underline">support.cowmas.com</div>
            </div>
          </div>
          <div class="main_desktop-block_rightSide justify-center d-flex">
            <div>
              <v-card
                class="
                  main_desktop-block_rightSide_content
                  rounded-lg
                  shadow-md
                  overflow-hidden
                  main_body
                  mt-16
                "
                elevation="3"
              >
                <v-tabs v-model="model" centered fixed-tabs>
                  <v-tabs-slider class="blue"></v-tabs-slider>
                  <v-tab
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.link"
                    :class="
                      $route.name === item.link_name
                        ? 'blue--text'
                        : 'gray_secondary--text'
                    "
                  >
                    <span class="font-600">{{ item.name }}</span>
                  </v-tab>
                </v-tabs>
                <v-tabs-items v-model="model">
                  <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
                    <transition name="fade" mode="out-in">
                      <router-view :key="$route.path"></router-view>
                    </transition>
                  </v-tab-item>
                </v-tabs-items>
              </v-card>
            </div>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: 'Войти',
        link: '/auth/login',
        link_name: 'login',
      },
      {
        name: 'Регистрация',
        link: '/auth/registration',
        link_name: 'registration',
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

<style lang="scss" scoped>
@import '../../styles/variables';
@import '../../styles/auth';
</style>
