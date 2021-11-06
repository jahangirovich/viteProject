<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <v-list dense class="pt-0">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
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
    }
  },
})
</script>
