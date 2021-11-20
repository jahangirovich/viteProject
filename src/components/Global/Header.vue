<template>
  <div class="header d-flex justify-space-between align-center">
    <v-breadcrumbs :items="breadcrumbs" class="m-none p-0 pl-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.disabled ? '' : item.path"
          :class="item.disabled ? '' : 'text-decoration-underline'"
        >
          {{
            item.id
              ? i18n.t('breadcrumbs.animal_id', { count: item.id })
              : i18n.t('breadcrumbs.' + item.name)
          }}
        </v-breadcrumbs-item>
      </template>
      <template #divider>
        <v-icon small class="ma-0 pa-0">{{ icons.mdiChevronRight }}</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="d-flex align-center">
      <v-badge :content="'1'" :value="'1'" color="accent" class="mr-7" overlap>
        <v-btn icon class="mr-1 pa-1 text-body-2">
          <v-img :src="require('@/assets/main/header/notification.svg')" />
        </v-btn>
      </v-badge>
      <div>
        <v-menu transition="slide-x-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="d-flex align-center">
              <v-avatar>
                <img src="@/assets/main/other/userProfile.png" alt="John" />
              </v-avatar>
              <div class="d-flex flex-column ml-3 mr-2">
                <h3 class="text-body-2 font-weight-bold">Фамилия Имя</h3>
                <span class="gray_secondary--text text-caption">Администратор</span>
              </div>
              <v-icon>{{ icons.mdiChevronDown }}</v-icon>
            </div>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in profileDropDown" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiChevronDown, mdiChevronRight } from '@mdi/js'
import { Ref, ref, watch } from '@vue/composition-api'
import { Route } from 'vue-router'
import i18n from '@/i18n'

export default {
  data() {
    return {
      i18n: i18n,
    }
  },
  setup(props, { root }) {
    // items for header dropdown (just template till the end of design)
    const profileDropDown = ref([
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ])
    // mdi icons
    const icons = ref({
      mdiChevronDown,
      mdiChevronRight,
    })

    function computedRoute(arr) {
      // filter bridge component where stays as bridge between components
      if (arr.matched.length < 1) return []
      return arr.matched
        .slice(1, arr.matched.length)
        .filter((obj) => obj.name !== 'bridge')
        .map((obj) => {
          if (obj.name.includes('id')) {
            return {
              ...obj,
              id: arr.params.id,
              disabled: true,
            }
          }
          return {
            ...obj,
            disabled: obj.name === root.$route.name,
          }
        })
    }

    // breadcrumps generation from route
    const breadcrumbs: Ref<Route> = ref(computedRoute(root.$route))

    watch(
      () => root.$route,
      (current) => {
        breadcrumbs.value = computedRoute(current)
      }
    )

    return {
      icons,
      profileDropDown,
      breadcrumbs,
    }
  },
  name: 'customHeader',
}
</script>
<style scoped lang="scss"></style>
