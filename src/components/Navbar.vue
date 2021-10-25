<template>
  <header>
    <v-card-title>
      <v-icon :color="'red lighten-2'"> mdi-heart-pulse </v-icon>
      <v-layout column align-start>
        <div class="caption grey--text text-uppercase">Heart rate</div>
        <div>
          <span class="display-2 font-weight-black" v-text="avg || '—'"></span>
          <strong v-if="avg">BPM</strong>
        </div>
      </v-layout>
      <v-btn>hi</v-btn>
      <v-btn icon class="align-self-start" size="28">
        <v-icon>mdi-arrow-right-thick</v-icon>
      </v-btn>
    </v-card-title>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import { useRouter } from 'vue2-helpers/vue-router'
export default defineComponent({
  setup() {
    const route = useRouter()
    const activeIndex = ref('0')

    const handleSelect = (key: string) => {
      const routes = ['/', '/about', '/news/1']
      activeIndex.value = key
      const idx = Number(key)
      const path = routes[idx]
      route.push(path)
    }
    return { activeIndex, handleSelect }
  },
})
</script>
