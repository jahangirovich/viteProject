<template>
  <div class="header d-flex justify-space-between align-center">
    <v-breadcrumbs :items="breadcrumbs" class="m-none p-0 pl-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
          :href="item.path"
          :class="item.disabled ? '' : 'text-decoration-underline'"
        >
          {{ item.name }}
        </v-breadcrumbs-item>
      </template>
      <template #divider>
        <v-icon small class="ma-0 pa-0">{{ icons.mdiChevronRight }}</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="d-flex align-center">
      <v-badge :content="'1'" :value="'1'" color="accent" class="mr-7" overlap>
        <v-img :src="require('@/assets/main/header/notification.svg')" class="mr-2" />
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
import { computed, Ref, ref, watch } from '@vue/composition-api'
import { Route } from 'vue-router'

export default {
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
      return arr.matched.map((obj) => {
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

    console.log(breadcrumbs)

    return {
      icons,
      profileDropDown,
      breadcrumbs,
    }
  },
  data() {
    return {}
  },
  name: 'customHeader',
}
</script>
<style scoped lang="scss"></style>
