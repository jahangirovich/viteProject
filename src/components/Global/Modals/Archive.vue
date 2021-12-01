<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="360" overlay-color="primary">
      <v-card class="py-2 px-2 text-center">
        <div class="ml-0 text-right">
          <v-btn icon>
            <v-icon icon>{{ mdiCloseCircleOutline }}</v-icon>
          </v-btn>
        </div>
        <div class="text-center">
          <v-btn icon class="bg2">
            <v-icon color="accent">{{ mdiArchiveArrowDown }}</v-icon>
          </v-btn>
        </div>
        <v-card-title class="justify-center font-weight-bold">
          {{ i18n.t('Переместить в архив?') }}
        </v-card-title>
        <v-card-text class="mt-3 text-center">{{
          i18n.t('Информация о стойле “Название стойла” будет перемещена в архив')
        }}</v-card-text>
        <v-card-actions>
          <v-row>
            <v-col class="px-1 py-3">
              <v-btn
                depressed
                outlined
                class="rounded-lg font-weight-bold"
                large
                width="100%"
                min-width="100%"
                @click="dialog = false"
              >
                {{ i18n.t('Отмена') }}
              </v-btn>
            </v-col>
            <v-col class="px-1 py-3">
              <v-btn
                width="100%"
                min-width="100%"
                large
                depressed
                color="accent"
                class="rounded-lg font-weight-bold"
                @click="dialog = false"
              >
                {{ i18n.t('Переместить') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { mdiArchiveArrowDown, mdiCloseCircleOutline } from '@mdi/js'
import i18n from '@/i18n'
export default {
  props: ['dialog'],
  data() {
    return {
      mdiArchiveArrowDown,
      i18n: i18n,
      mdiCloseCircleOutline,
    }
  },
  name: 'ArchiveModal',
}
</script>
