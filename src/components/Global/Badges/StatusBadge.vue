<template>
  <v-btn
    :color="getColor(status)"
    light
    class="success--text text-none px-2"
    width="auto"
    height="20px"
    depressed
  >
    <span class="text-body-2">{{ status }}</span>
  </v-btn>
</template>

<script lang="ts">
export default {
  props: ['status'],
  methods: {
    getColor(status) {
      return 'success_bg'
    },
  },
  name: 'StatusBadge',
}
</script>
