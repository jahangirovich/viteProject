<template>
  <v-btn
    :color="getColor(status)"
    light
    :class="`${getTextColor(status)}--text text-none px-2`"
    width="auto"
    height="20px"
    depressed
  >
    <span class="text-body-2">{{ text ? text : status }}</span>
  </v-btn>
</template>

<script lang="ts">
export default {
  props: ['status', 'text'],
  methods: {
    getColor(status) {
      if (status === 'observe') {
        return 'bg2'
      } else if (status === 'sick') {
        return 'error_bg'
      }
      return 'success_bg'
    },
    getTextColor(status) {
      if (status === 'observe') {
        return 'accent'
      } else if (status === 'sick') {
        return 'error'
      }
      return 'success'
    },
  },
  name: 'StatusBadge',
}
</script>
