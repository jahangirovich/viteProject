<template>
  <div class="subheader">
    <h2 class="mt-4 text-h5 font-weight-bold">Животные</h2>
    <v-tabs v-model="model" align-with-title class="mt-4 transparent">
      <v-tabs-slider class="accent"></v-tabs-slider>
      <v-tab
        v-for="(item, i) in tabs"
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
      <v-tab-item v-for="(item, i) in tabs" :key="i" :value="item.link">
        <div class="wrapper mt-3">
          <router-view :key="$route.path"></router-view>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      model: false,
      tabs: [
        {
          name: 'Список',
          link: '/home/stalls',
          link_name: 'stalls',
        },
        {
          name: 'Группы',
          link: '/home/animals',
          link_name: 'animals',
        },
      ],
    }
  },
})
</script>
