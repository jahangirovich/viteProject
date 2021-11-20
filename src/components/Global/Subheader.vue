<template>
  <div class="subheader">
    <div class="d-flex justify-space-between align-stretch mt-4" v-if="goal === 'edit'">
      <div class="text-h5 font-weight-bold primary--text d-flex align-center">
        <v-btn icon class="mr-4] ml-0">
          <v-icon color="primary">
            {{ mdiArrowLeft }}
          </v-icon>
        </v-btn>
        {{ title }}
      </div>
      <div class="btns d-flex align-center">
        <v-btn outlined depressed color="primary" class="text-none" large>
          Отменить
        </v-btn>
        <v-btn class="text-none ml-4" depressed color="accent" large>Сохранить</v-btn>
      </div>
    </div>
    <div
      class="d-flex justify-space-between align-stretch mt-4"
      v-else-if="goal === 'detail'"
    >
      <div class="text-h5 font-weight-bold primary--text d-flex align-center">
        <v-btn icon class="mr-4] ml-0">
          <v-icon color="primary">
            {{ mdiArrowLeft }}
          </v-icon>
        </v-btn>
        {{ title }}
      </div>
      <div class="btns d-flex align-center">
        <v-btn depressed small class="text-none accent--text" color="transparent">
          <v-icon class="mr-2">
            {{ mdiPencil }}
          </v-icon>
          Редактировать
        </v-btn>
        <v-divider vertical class="px-1"></v-divider>
        <v-btn small class="text-none ml-0 error--text" color="transparent" depressed>
          <v-icon>
            {{ mdiDeleteOutline }}
          </v-icon>
          Удалить
        </v-btn>
      </div>
    </div>
    <h2 class="mt-4 text-h5 font-weight-bold" v-else>{{ title }}</h2>
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
        <v-tab-item v-for="(item, i) in items" :key="i" :value="item.link" class="bg">
          <div class="wrapper mt-3 bg">
            <router-view :key="$route.path"></router-view>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mdiArrowLeft, mdiPencil, mdiDeleteOutline } from '@mdi/js'
export default Vue.extend({
  props: ['title', 'items', 'goal'],
  data() {
    return {
      model: false,
      mdiArrowLeft,
      mdiPencil,
      mdiDeleteOutline,
    }
  },
})
</script>
