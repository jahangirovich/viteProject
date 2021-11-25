<template>
  <div class="my-4">
    <div class="d-flex" v-for="(item, i) in values" :key="i">
      <v-row>
        <v-col md="3">
          <span>{{ item.type }}</span>
        </v-col>
        <v-col>
          <span class="font-weight-bold">{{ item.value }}</span>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['values'],
  name: 'PropertyComponent',
})
</script>
