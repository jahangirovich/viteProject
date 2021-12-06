<template>
  <v-app>
    <v-main class="auth main accent">
      <v-container fluid class="px-0 py-0">
        <div class="content-list pl-md-13">
          <div class="content-item pt-6">
            <v-img
              :src="require('@/assets/img/auth/cowmas_logo.svg')"
              width="141px"
              height="74px"
              class="ma-auto mb-4 ml-md-0"
            >
            </v-img>
            <div
              class="
                logo-text
                font-weight-regular
                white--text
                text-center text-md-left
                mb-4
              "
              v-html="$t('auth.header_description')"
            ></div>
          </div>
          <div class="content-item" v-show="$vuetify.breakpoint.mdAndUp">
            <v-img :src="require('@/assets/img/auth/cowmasBanner.png')"></v-img>
          </div>
          <div class="content-item d-md-flex justify-md-center align-md-center">
            <v-card class="rounded-lg shadow-md overflow-hidden">
              <v-tabs height="auto" v-model="model" centered fixed-tabs>
                <v-tabs-slider class="accent"></v-tabs-slider>
                <v-tab
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.link"
                  class="tab-link pt-9 pb-3"
                  :class="
                    $route.name === item.link_name
                      ? 'accent--text'
                      : 'gray_secondary--text'
                  "
                >
                  <span class="router-link-text">{{ item.name }}</span>
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="model">
                <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
                  <router-view :key="$route.path"></router-view>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </div>
          <div
            class="
              d-flex
              flex-column
              justify-start
              align-center align-md-start
              pt-10
              pb-5 pb-md-10
              content-item
              text-center
            "
          >
            <h2
              class="mb-1 pb-3 text-uppercase footer-title white--text uppercase"
              v-text="$t('auth.footer_title')"
            ></h2>
            <a
              class="footer-link y-1 white--text"
              :href="$t('auth.footer_phone')"
              v-text="$t('auth.footer_phone')"
            ></a>
            <a
              class="footer-link text-decoration-underline white--text"
              :href="$t('auth.footer_support_site')"
              v-text="$t('auth.footer_support_site')"
            >
            </a>
          </div>
        </div>
      </v-container>
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
@import '~vuetify/src/styles/styles.sass';
@import '../../styles/variables';

.logo-text {
  font-size: $secondary-font-size;
  line-height: $secondary-line-height;
}

.content-list {
  display: grid;
  grid-template-rows: minmax(225px, max-content) minmax(360px, max-content) minmax(
      146px,
      max-content
    );
  min-height: 100vh;
}

.router-link-text {
  font-size: $main-font-size;
  line-height: $main-line-height;
  font-weight: map-get($font-weights, 'semi-bold');
}

.footer-title {
  position: relative;
  font-size: $main-font-size;
  line-height: $main-line-height;
  font-weight: map-get($font-weights, 'semi-bold');

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -4px;
    display: block;
    width: 8px;
    height: 2px;
    background-color: map-get($theme-colors, 'white');
  }
}

.footer-link {
  font-size: $main-font-size;
  line-height: $secondary-line-height;
  font-weight: map-get($font-weights, 'regular');
  opacity: 1;
  transition: opacity 0.2s;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
}

@media #{map-get($display-breakpoints, 'md-and-up')} {
  .footer-title::before {
    left: 0;
    margin-left: 0;
  }

  .content-list {
    grid-template-columns: 38% 1fr;
    grid-template-rows: 290px 1fr auto;
  }

  .content-item:nth-child(3) {
    align-self: stretch;
    grid-column: 2/-1;
    grid-row: 1/-1;

    background-color: map-get($theme-colors, 'white');
  }
}
</style>
