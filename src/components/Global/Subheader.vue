<template>
  <div class="subheader">
    <h2 class="mt-4 text-h5 font-weight-bold">{{ title }}</h2>
    <div v-if="items">
      <v-tabs v-model="model" align-with-title class="mt-4 transparent">
        <v-tabs-slider class="accent"></v-tabs-slider>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          :class="
            'mt-0 ml-0 mr-5' +
            ($route.name === item.link_name ? ' accent--text' : ' gray_secondary--text')
          "
        >
          <span class="font-weight-bold text-body-2">{{ item.name }}</span>
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="model">
        <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link">
          <div class="wrapper mt-3">
            <router-view :key="$route.path"></router-view>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['title', 'items'],
  data() {
    return {
      model: false,
    }
  },
})
</script>
