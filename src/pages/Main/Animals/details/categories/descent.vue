<template>
  <div class="mb-2">
    <div class="cards d-flex justify-space-between flex-wrap mt-4">
      <v-card
        elevation="1"
        class="d-flex align-center pa-2 rounded-lg mb-4"
        width="32.8%"
        v-for="(item, i) in cards"
        :key="i"
      >
        <v-btn icon class="bg" width="48px" height="48px">
          <v-icon color="gray_secondary">
            {{ item.img }}
          </v-icon>
        </v-btn>
        <div class="d-flex flex-column ml-4 text-body-2">
          <span class="gray_secondary--text">{{ item.title }}</span>
          <span class="font-weight-bold">{{ item.info }}</span>
        </div>
      </v-card>
    </div>
    <div class="d-flex justify-content-between">
      <v-card elevation="0" width="50%" class="mr-4 transparent">
        <v-expansion-panels multiple flat accordion>
          <v-expansion-panel>
            <v-expansion-panel-header class="px-4">
              <h4 class="text-body-2 font-weight-bold">Мать</h4>
            </v-expansion-panel-header>
            <!-- <v-divider></v-divider> -->
            <v-expansion-panel-content class="mt-2">sadas </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card elevation="0" width="50%" class="transparent">
        <v-expansion-panels multiple accordion flat>
          <v-expansion-panel>
            <v-expansion-panel-header class="px-4">
              <h4 class="text-body-2 font-weight-bold">Отец</h4>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="mt-2">asdasd </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </div>
</template>
<script>
import { descent } from './index'
export default {
  name: 'DescentDetailProfile',
  setup() {
    const decent = descent()
    const cards = decent.cards
    return {
      cards,
    }
  },
  data() {
    return {}
  },
}
</script>
