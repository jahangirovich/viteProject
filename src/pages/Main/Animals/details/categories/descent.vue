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
        <div class="d-flex flex-column ml-4 text-body-1">
          <span class="gray_secondary--text">{{ item.title }}</span>
          <span class="font-weight-bold">{{ item.info }}</span>
        </div>
      </v-card>
    </div>
    <div class="d-flex justify-content-between">
      <v-card elevation="0" width="50%" class="mr-4 transparent">
        <v-expansion-panels multiple flat accordion v-model="expandedPanels">
          <v-expansion-panel>
            <v-expansion-panel-header class="px-4">
              <h4 class="text-body-1 font-weight-bold">Мать</h4>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="mt-2">
              <div>
                <div>
                  <v-img
                    :src="require('@/assets/main/animals/profile/cowProfileImg.png')"
                    width="108px"
                    height="108px"
                    contain
                  />
                  <h4 class="my-2">
                    <router-link
                      to="/home/stalls"
                      class="
                        accent--text
                        text-h6
                        font-weight-bold
                        text-decoration-underline
                      "
                      >AST_012123</router-link
                    >
                  </h4>
                  <StatusBadge :status="'На ферме'" />
                  <v-icon small class="ml-1">
                    {{ mdiInformationOutline }}
                  </v-icon>
                </div>
                <div class="mt-2">
                  <div class="mb-2">
                    <LabelWithInfo type="Порода" value="Галловейский, племенной" />
                  </div>
                  <div class="mb-2">
                    <LabelWithInfo type="Категория" value="Значение" />
                  </div>
                  <div>
                    <LabelWithInfo type="Кличка" value="Текст" />
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
      <v-card elevation="0" width="50%" class="transparent">
        <v-expansion-panels multiple accordion flat v-model="expandedPanels">
          <v-expansion-panel>
            <v-expansion-panel-header class="px-4">
              <h4 class="text-body-1 font-weight-bold">Отец</h4>
            </v-expansion-panel-header>
            <v-divider></v-divider>
            <v-expansion-panel-content class="mt-2">
              <div>
                <div>
                  <v-img
                    :src="require('@/assets/main/animals/profile/animalPlaceholder.png')"
                    width="108px"
                    height="108px"
                    contain
                  />
                  <h4 class="my-2">
                    <router-link
                      to="/home/stalls"
                      class="
                        accent--text
                        text-h6
                        font-weight-bold
                        text-decoration-underline
                      "
                      >AST_012123</router-link
                    >
                  </h4>
                  <StatusBadge :status="'На ферме'" />
                  <v-icon small class="ml-1">
                    {{ mdiInformationOutline }}
                  </v-icon>
                </div>
                <div class="mt-2">
                  <div class="mb-2">
                    <LabelWithInfo type="Порода" value="Галловейский, племенной" />
                  </div>
                  <div class="mb-2">
                    <LabelWithInfo type="Категория" value="Значение" />
                  </div>
                  <div>
                    <LabelWithInfo type="Кличка" value="Текст" />
                  </div>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </div>
</template>
<script>
import { descent } from './index'
import { mdiInformationOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
export default {
  name: 'DescentDetailProfile',
  setup() {
    const decent = descent()
    const cards = decent.cards
    const expandedPanels = ref(Array.from({ length: 2 }, (v, k) => k))
    return {
      cards,
      mdiInformationOutline,
      expandedPanels,
    }
  },
  data() {
    return {}
  },
}
</script>
