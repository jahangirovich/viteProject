<template>
  <div class="d-flex justify-content-between analyze flex-wrap">
    <v-card elevation="0" width="49%" class="mr-4 transparent mb-2 elevation-card">
      <v-expansion-panels multiple flat accordion v-model="expandedPanels">
        <v-expansion-panel>
          <v-expansion-panel-header class="px-4">
            <div>
              <span class="gray_secondary--text">12.07.2021</span>
              <h4 class="text-body-1 font-weight-bold my-2">Наименование диагноза</h4>
              <StatusBadge :status="'observe'" :text="'Под наблюдением'" />
            </div>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="mt-2">
            <PropertyWithLine
              :values="[
                {
                  type: 'Предмет обследования',
                  value:
                    'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения модели развития',
                },
                {
                  type: 'Лечение',
                  links: [
                    {
                      name: 'Назначение №12345678',
                      link: '/home/animals/AST_012124',
                    },
                  ],
                  isLink: true,
                },
                {
                  type: 'Лечение',
                  links: [
                    {
                      name: 'Фамилия Имя',
                      link: '/home/animals/AST_012124',
                    },
                  ],
                  isLink: true,
                },
                {
                  type: 'Пользователь',
                  links: [
                    {
                      name: 'Фамилия Имя',
                      link: '/home/animals/AST_012124',
                    },
                  ],
                  isLink: true,
                },
                {
                  type: 'Заметки',
                  value:
                    'Значимость этих проблем настолько очевидна, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения модели развития',
                },
              ]"
              typeSize="4"
            >
              <template v-slot:link="{ item }">
                <div v-for="(obj, i) in item.links" :key="i" class="mb-1">
                  <router-link
                    :to="obj.link"
                    class="accent--text text-decoration-underline"
                    >{{ obj.name }}</router-link
                  >
                </div>
              </template>
            </PropertyWithLine>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card elevation="0" width="49%" class="transparent">
      <v-expansion-panels multiple accordion flat v-model="expandedPanels">
        <v-expansion-panel>
          <v-expansion-panel-header class="px-4">
            <div>
              <span class="gray_secondary--text">12.07.2021</span>
              <h4 class="text-body-1 font-weight-bold my-2">Наименование диагноза</h4>
              <StatusBadge :status="'sick'" :text="'Болен'" />
            </div>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="mt-2"> </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card elevation="0" width="49%" class="transparent mr-4">
      <v-expansion-panels multiple accordion flat v-model="expandedPanels">
        <v-expansion-panel>
          <v-expansion-panel-header class="px-4">
            <div>
              <span class="gray_secondary--text">12.07.2021</span>
              <h4 class="text-body-1 font-weight-bold my-2">Наименование диагноза</h4>
              <StatusBadge :status="'sick'" :text="'Болен'" />
            </div>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="mt-2"> </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card elevation="0" width="49%" class="transparent">
      <v-expansion-panels multiple accordion flat v-model="expandedPanels">
        <v-expansion-panel>
          <v-expansion-panel-header class="px-4">
            <div>
              <span class="gray_secondary--text">12.07.2021</span>
              <h4 class="text-body-1 font-weight-bold my-2">Наименование диагноза</h4>
              <StatusBadge :status="'observe'" :text="'Под наблюдением'" />
            </div>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="mt-2"> </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
import { descent } from './index'
import { mdiInformationOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
export default {
  name: 'analyze',
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
}
</script>

<style lang="scss">
.analyze .v-expansion-panel-header__icon {
  align-self: start;
}
</style>
