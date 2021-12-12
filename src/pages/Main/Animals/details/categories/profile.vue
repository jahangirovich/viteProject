<template>
  <div class="d-flex py-2">
    <div class="flex-grow-0">
      <v-card class="mx-3 pa-4" elevation="1">
        <div>
          <v-card elevation="0" width="232px">
            <img :src="require('@/assets/main/other/cow.png')" width="232px" cover />
          </v-card>
          <h4 class="text-h6 font-weight-bold mt-2">{{ $t('Кличка') }}</h4>
          <div class="mt-1">
            <StatusBadge :status="'На ферме'" />
          </div>
          <div class="mt-3" v-for="(cow, i) in cowInfos" :key="i">
            <LabelWithInfo :type="cow.type" :value="cow.value" />
          </div>
          <v-divider class="my-2"></v-divider>
          <div class="mt-2 d-flex justify-space-between">
            <div class="d-flex align-center">
              <div>
                <img
                  :src="require('@/assets/main/animals/profile/cowIcon.svg')"
                  width="19px"
                  height="19px"
                />
              </div>
              <span class="text-body-2 font-weight-bold">4.6лет</span>
            </div>
            <div class="d-flex align-center">
              <div>
                <img
                  :src="require('@/assets/main/animals/profile/weightIcon.svg')"
                  width="19px"
                  height="19px"
                />
              </div>
              <span class="text-body-2 font-weight-bold ml-1">44 кг</span>
            </div>
            <div class="d-flex align-center">
              <div>
                <img
                  :src="require('@/assets/main/animals/profile/topBottomIcon.svg')"
                  width="19px"
                  height="19px"
                />
              </div>
              <span class="text-body-2 font-weight-bold">150 см</span>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <v-divider vertical></v-divider>
    <div class="mx-3 flex-grow-1" height="auto" elevation="1">
      <v-expansion-panels multiple accordion flat v-model="expandedPanels">
        <v-expansion-panel
          class="mb-4 elevation-0 rounded-lg"
          v-for="(item, i) in panels"
          :key="i"
        >
          <v-expansion-panel-header class="px-4">
            <h4 class="text-body-2 font-weight-bold">{{ $t(item.title) }}</h4>
          </v-expansion-panel-header>
          <v-divider v-if="expandedPanels.includes(i)"></v-divider>
          <v-expansion-panel-content class="mt-2" v-if="!item.isDescription">
            <PropertyWithLine :values="item.items" />
          </v-expansion-panel-content>
          <v-expansion-panel-content v-else class="mt-4">
            <div
              v-html="item.content.text"
              class="primary--text text-start line-24 text-body-2"
            ></div>
            <div class="d-flex flex-wrap">
              <div v-for="(obj, x) in item.content.images" :key="x" class="mr-4 mt-4">
                <img :src="obj" width="108" height="108" class="rounded-md" contain />
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { profile } from './index'
export default {
  setup() {
    const profileItems = profile()
    const panels = ref(profileItems.panelItems)
    const cowInfos = ref(profileItems.cowInfo)
    // setting opened panels
    const expandedPanels = ref(
      Array.from({ length: profileItems.panelItems.length }, (v, k) => k)
    )
    return { expandedPanels, panels, cowInfos }
  },
}
</script>
