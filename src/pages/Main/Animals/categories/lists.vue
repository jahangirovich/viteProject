<template>
  <div>
    <div class="pa-1 lists">
      <v-form class="pa-0" elevation="0">
        <div class="d-flex justfy-content-center align-center">
          <v-text-field
            label="ID или имя"
            hide-details="auto"
            outlined
            color="accent"
            dense
            class="text-body-2 rounded-lg white"
            :append-icon="mdiFilterVariant"
            :prepend-inner-icon="mdiMagnify"
          ></v-text-field>
          <v-btn class="ml-3 accent rounded-lg" elevation="0">
            <v-icon> {{ mdiPlus }} </v-icon>
            <span class="text-none">Добавить животное</span>
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiMagnify, mdiFilterVariant, mdiPlus } from '@mdi/js'
export default Vue.extend({
  data() {
    return {
      mdiMagnify,
      mdiFilterVariant,
      mdiPlus,
    }
  },
})
</script>

<style lang="scss">
.lists label {
  font-size: var(--font-size-sm);
}
</style>
