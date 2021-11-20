<template>
  <div>
    <div class="gray_secondary--text">{{ type }}</div>
    <div class="font-weight-bold" v-if="!link">{{ value }}</div>
    <div v-else>
      <router-link :to="link.href" class="accent--text font-weight-bold">
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['type', 'value', 'link'],
  name: 'LabelWithInfo',
})
</script>
