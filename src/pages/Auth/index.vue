<template>
  <v-app>
    <v-main class="auth main">
      <v-container fluid class="main_mobile-block accent">
        <div class="p-0 d-flex flex-column">
          <div class="main_auth-header main_header text-center my-7">
            <v-img
              :src="require('@/assets/img/auth/cowmas_logo.svg')"
              width="141px"
              height="74px"
              class="ma-auto"
            >
            </v-img>
            <div class="font-weight-light white--text text-center mt-5">
              Платформа для мониторинга <br />
              и аналитики данных <br />
              в животноводстве
            </div>
          </div>
          <v-card class="rounded-lg shadow-md overflow-hidden main_body">
            <v-tabs v-model="model" centered fixed-tabs>
              <v-tabs-slider class="accent"></v-tabs-slider>
              <v-tab
                v-for="(item, i) in items"
                :key="i"
                :to="item.link"
                :class="
                  $route.name === item.link_name ? 'accent--text' : 'gray_secondary--text'
                "
              >
                <span class="font-weight-bold">{{ item.name }}</span>
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="model">
              <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
                <router-view :key="$route.path"></router-view>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
          <div class="main_footer align-content-end text-center">
            <h2 class="font-weight-bold white--text text-body-2 uppercase mt-9 mb-1">
              Техническая поддержка
              <br />
              -
            </h2>
            <div class="phone my-1 text-body-2">+7 (707) 902-34-56</div>
            <div class="phone text-decoration-underline my-1 text-body-2">
              support.cowmas.com
            </div>
          </div>
        </div>
      </v-container>
      <div class="main_desktop-block">
        <div class="d-flex">
          <div
            class="
              main_desktop-block_leftSide
              accent
              px-12
              pb-6
              d-flex
              flex-column
              justify-space-between
            "
          >
            <div class="text-center my-7">
              <v-img
                :src="require('@/assets/img/auth/cowmas_logo.svg')"
                alt="Cowmas"
                class="logo"
                width="305px"
                height="160px"
              >
              </v-img>
              <div class="font-weight-light white--text text-left mt-5">
                Платформа для мониторинга и аналитики данных в животноводстве
              </div>
            </div>
            <div>
              <v-img :src="require('@/assets/img/auth/cowmasBanner.png')"></v-img>
            </div>
            <div class="main_footer align-content-end text-left">
              <h2 class="font-weight-bold text-body-2 white--text uppercase">
                Техническая поддержка<br />
                -
              </h2>
              <div class="phone text-body-2 my-1">+7 (707) 902-34-56</div>
              <div class="phone text-body-2 text-decoration-underline">
                support.cowmas.com
              </div>
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
                  <v-tabs-slider class="accent"></v-tabs-slider>
                  <v-tab
                    v-for="(item, i) in items"
                    :key="i"
                    :to="item.link"
                    :class="
                      $route.name === item.link_name
                        ? 'accent--text'
                        : 'gray_secondary--text'
                    "
                  >
                    <span class="font-weight-bold">{{ item.name }}</span>
                  </v-tab>
                </v-tabs>
                <v-tabs-items v-model="model">
                  <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
                    <router-view :key="$route.path"></router-view>
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
import useAuth, { tabLinks } from '.'
import { provide } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root }) {
    const items = ref(tabLinks)
    const auth = useAuth(root)
    // providing functions to child components
    provide('login', auth.login)

    provide('signUp', auth.signUp)

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
