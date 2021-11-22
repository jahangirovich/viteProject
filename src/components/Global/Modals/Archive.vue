<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290" overlay-color="primary">
      <v-card class="py-4 px-2">
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
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous location
          data to Google, even when no apps are running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false"> Disagree </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import Vue from 'vue'
import { mdiArchiveArrowDown, mdiCloseCircleOutline } from '@mdi/js'
export default Vue.extend({
  props: ['dialog'],
  data() {
    return {
      mdiArchiveArrowDown,
      mdiCloseCircleOutline,
    }
  },
  name: 'ArchiveModal',
})
</script>
