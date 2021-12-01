<template>
  <v-list>
    <div v-for="(folder, i) in folders" :key="i">
      <v-list-item class="px-0">
        <v-list-item-content>
          <v-list-item-title
            v-text="folder.title"
            class="font-weight-bold text-body-2"
          ></v-list-item-title>

          <v-list-item-subtitle
            v-text="folder.subtitle"
            class="text-body-2 gray_secondary--text my-1"
          ></v-list-item-subtitle>
          <span class="text-body-2 gray_secondary--text">{{ folder.text }}</span>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="primary lighten-1">{{ mdiChevronRight }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="i != folders.length - 1"></v-divider>
    </div>
  </v-list>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
export default {
  data() {
    return {
      mdiChevronRight,
      folders: [
        {
          subtitle: '12:34:56:789',
          title: 'Назначение участка',
          text: '45 га',
        },
        {
          subtitle: '12:34:56:789',
          title: 'Назначение участка',
          text: '45 га',
        },
        {
          subtitle: '12:34:56:789',
          title: 'Назначение участка',
          text: '45 га',
        },
      ],
    }
  },
  name: 'ListAreas',
}
</script>
