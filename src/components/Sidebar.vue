<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      color="primary"
      left
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <div class="d-flex flex-column" style="height: 100%">
        <div class="text-center">
          <v-img
            :src="require('../assets/main/sidebar/second_logo.png')"
            width="96"
            height="96"
            class="mx-auto my-4"
          />
          <h2 class="font-weight-bold mb-4 white--text text-body-1">
            ТОО «Крестьяское <br />
            хозяйство»
          </h2>
          <v-divider></v-divider>
        </div>
        <v-list>
          <v-list-item-group v-model="selectedItem" active-class="bg-active" class="mb-2">
            <router-link
              v-for="(item, i) in sidebarItems"
              :key="i"
              :to="'/home/' + item.url"
              class="text-decoration-none"
              :disabled="$route.fullPath.includes(item.url)"
            >
              <v-divider
                v-if="item.icon === '$vuetify.icons.settings'"
                class="my-2"
              ></v-divider>
              <!-- disable list item in current route url -->
              <v-list-item :disabled="$route.fullPath.includes(item.url)">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <router-link :to="'/home/' + item.url">
                    <v-list-item-title
                      class="white--text text-body-1"
                      v-text="item.text"
                    ></v-list-item-title>
                  </router-link>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
        <div class="mt-auto pa-4">
          <v-img
            :src="require('../assets/main/sidebar/cowmas_logo.svg')"
            width="91px"
            height="48px"
          />
          <span class="gray_secondary--text text-body-2">© 2021 Все права защищены</span>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

const urls = [
  { text: 'Аналитика', icon: '$vuetify.icons.analytics', url: 'analytics' },
  { text: 'Календарь', icon: '$vuetify.icons.calendar', url: 'calendar' },
  { text: 'Животные', icon: '$vuetify.icons.animals', url: 'animals' },
  { text: 'Стойла', icon: '$vuetify.icons.stalls', url: 'stalls' },
  { text: 'Пользователи', icon: '$vuetify.icons.users', url: 'users' },
  { text: 'Операции', icon: '$vuetify.icons.operations', url: 'operations' },
  { icon: '$vuetify.icons.settings', text: 'Настройки', url: 'settings' },
]

export default defineComponent({
  name: 'sidebar',
  setup(props, { root }) {
    // drawer to collapse and hide
    const drawer = ref(true)

    // sidebar items
    const sidebarItems = ref(urls)
    // search for current sidebar url
    const selectedItem = ref(
      urls.indexOf(
        urls.find((obj) => {
          return root.$route.fullPath.includes(obj.url)
        }) || urls[0]
      )
    )

    return {
      sidebarItems,
      drawer,
      selectedItem,
    }
  },
})
</script>

<style lang="scss">
@import '../styles/variables';

// set sidebar divider color
.theme--light.v-navigation-drawer .v-divider {
  border-color: map-get($theme-colors, 'dividers') !important;
}

// set padding to breadcrump
.v-breadcrumbs li:nth-child(2n) {
  padding: 0 3px;
}

.bg-active {
  background-color: map-get($theme-colors, 'navigation_background') !important;
  color: white !important;
  border-left: 4px solid map-get($theme-colors, 'accent');
  overflow: hidden;

  border-bottom-right-radius: 8px !important;
  border-top-right-radius: 8px !important;
  .v-list-item__icon {
    svg {
      path {
        fill: map-get($theme-colors, 'accent') !important;
      }
    }
  }
}
</style>
