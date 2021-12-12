<template>
  <div>
    <div class="gray_secondary--text text-body-1">{{ type }}</div>
    <div class="font-weight-bold text-body-1" v-if="!link">{{ value }}</div>
    <div v-else>
      <router-link :to="link.href" class="accent--text font-weight-bold">
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ['type', 'value', 'link'],
  name: 'LabelWithInfo',
}
</script>
