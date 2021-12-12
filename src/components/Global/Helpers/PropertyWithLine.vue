<template>
  <div>
    <div v-for="(item, i) in values" :key="i">
      <div class="d-flex py-3">
        <v-row>
          <v-col md="3">
            <span class="text-body-2">{{ item.type }}</span>
          </v-col>
          <v-col>
            <span class="font-weight-bold text-body-2">{{ item.value }}</span>
          </v-col>
        </v-row>
      </div>
      <v-divider v-if="i != values.length - 1"></v-divider>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ['values'],
  name: 'PropertyWithLine',
}
</script>
