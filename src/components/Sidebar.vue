<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      color="primary"
      left
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <div class="d-flex flex-col" style="height: 100%">
        <div class="text-center">
          <v-img
            :src="require('../assets/main/sidebar/second_logo.svg')"
            width="96"
            height="96"
            class="mx-auto my-4"
          />
          <h2 class="font-weight-bold mb-4 white--text text-14px">
            ТОО «Крестьяское <br />
            хозяйство»
          </h2>
          <v-divider></v-divider>
        </div>
        <v-list shaped>
          <v-list-item-group v-model="selectedItem" class="mb-2">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              color="navigation_background"
            >
              <v-list-item-icon>
                <v-icon class="gray_secondary--text" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="white--text text-14px"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-divider></v-divider>
          <v-list-item-group color="white" class="mt-2">
            <v-list-item
              v-for="(item, i) in [
                { icon: '$vuetify.icons.settings', text: 'Настройки' },
              ]"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon
                  class="gray_secondary--text text-14px"
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="white--text text-14px"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="mt-auto p-4">
          <v-img
            :src="require('../assets/main/sidebar/cowmas_logo.svg')"
            width="91px"
            height="48px"
          />
          <span class="gray_secondary--text text-12px">© 2021 Все права защищены</span>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'sidebar',
  setup() {},
  data() {
    return {
      drawer: true,
      selectedItem: 1,
      items: [
        { text: 'Аналитика', icon: '$vuetify.icons.analytics' },
        { text: 'Календарь', icon: '$vuetify.icons.calendar' },
        { text: 'Животные', icon: '$vuetify.icons.animals' },
        { text: 'Стойла', icon: '$vuetify.icons.stalls' },
        { text: 'Пользователи', icon: '$vuetify.icons.users' },
        { text: 'Операции', icon: '$vuetify.icons.operations' },
      ],
    }
  },
})
</script>

<style lang="scss">
@import '../sass/variables.scss';

// set sidebar divider color
.theme--light.v-navigation-drawer .v-divider {
  border-color: map-get($theme-colors, 'dividers') !important;
}
</style>
