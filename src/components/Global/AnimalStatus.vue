<template>
  <v-btn
    :color="getColor(status)"
    light
    class="success--text text-none px-2"
    width="auto"
    height="20px"
    depressed
  >
    <span class="text-caption">{{ status }}</span>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['status'],
  methods: {
    getColor(status) {
      return 'success_bg'
    },
  },
  name: 'AnimalStatus',
})
</script>
