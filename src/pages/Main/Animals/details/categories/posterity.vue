<template>
  <div class="d-flex justify-content-between flex-wrap">
    <v-card
      elevation="0"
      width="32%"
      class="mr-4 transparent mb-4"
      v-for="i in 6"
      :key="i"
    >
      <v-expansion-panels multiple flat accordion v-model="expandedPanels">
        <v-expansion-panel class="pb-0">
          <v-expansion-panel-header class="px-4">
            <div class="d-flex w-auto align-center">
              <v-card elevation="0" width="40px" height="40px">
                <img :src="require('@/assets/main/animals/profile/cowProfileImg.png')" />
              </v-card>
              <router-link
                to="/home/stalls"
                class="
                  accent--text
                  text-decoration-underline
                  font-weight-bold
                  text-body-1
                  ml-2
                "
                >AST_012123</router-link
              >
            </div>
          </v-expansion-panel-header>
          <v-divider></v-divider>
          <v-expansion-panel-content class="mt-2">
            <div class="mt-2">
              <div>
                <PropertyWithLine
                  :values="[
                    {
                      type: 'Пол',
                      value: 'Самец',
                    },
                    {
                      type: 'Дата рождения',
                      value: '18.11.2021',
                    },
                    {
                      type: 'Второй родитель',
                      links: [
                        {
                          name: 'AST_012124',
                          link: '/home/animals/AST_012124',
                        },
                        {
                          name: 'AST_012124',
                          link: '/home/animals/AST_012124',
                        },
                      ],
                      isLink: true,
                    },
                    {
                      type: 'Возраст выбытия',
                      value: 'Возраст выбытия',
                    },
                    {
                      type: 'Причина выбытия',
                      value: 'Кража скота',
                    },
                    {
                      type: 'Метод осеменения',
                      value: 'Искусственное осеменение',
                    },
                  ]"
                  typeSize="6"
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
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>
<script>
import { mdiInformationOutline } from '@mdi/js'
import { ref } from '@vue/composition-api'
export default {
  name: 'DetailProfilePosterity',
  data() {
    return {
      mdiInformationOutline,
    }
  },
  setup() {
    const expandedPanels = ref(Array.from({ length: 2 }, (v, k) => k))
    return { expandedPanels }
  },
}
</script>
