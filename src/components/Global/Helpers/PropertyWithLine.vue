<template>
  <div>
    <div v-for="(item, i) in values" :key="i">
      <div class="d-flex py-3">
        <v-row>
          <v-col :md="typeSize ? typeSize : 3">
            <span class="text-body-1 gray_secondary--text">{{ item.type }}</span>
          </v-col>
          <v-col>
            <span class="text-body-1 primary--text" v-if="!item.isLink">{{
              item.value
            }}</span>
            <slot v-else name="link" v-bind:item="item"></slot>
          </v-col>
        </v-row>
      </div>
      <v-divider v-if="i != values.length - 1"></v-divider>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: ['values', 'typeSize'],
  name: 'PropertyWithLine',
}
</script>
