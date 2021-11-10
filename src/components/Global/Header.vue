<template>
  <div class="header d-flex justify-between align-center">
    <v-breadcrumbs :items="items" class="m-none p-0 pl-0">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :href="item.href" :class="item.disabled ? '' : 'underline'">
          {{ item.text }}
        </v-breadcrumbs-item>
      </template>
      <template #divider>
        <v-icon small>{{ mdiChevronRight }}</v-icon>
      </template>
    </v-breadcrumbs>
    <div class="d-flex align-center">
      <v-badge :content="'1'" :value="'1'" color="accent" class="mr-7" overlap>
        <v-img
          :src="require('@/assets/main/header/notification.svg')"
          class="relative right-2"
        />
      </v-badge>
      <div>
        <v-menu transition="slide-x-transition" bottom right>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" class="d-flex align-center">
              <v-avatar>
                <img src="@/assets/main/other/userProfile.png" alt="John" />
              </v-avatar>
              <div class="d-flex flex-col ml-3 mr-2">
                <h3 class="text-14px">Фамилия Имя</h3>
                <span class="text-12px gray_secondary--text">Администратор</span>
              </div>
              <v-icon>{{ mdiChevronDown }}</v-icon>
            </div>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items2" :key="index">
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

export default {
  data() {
    return {
      items: [
        {
          text: 'Животные',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Животное 1',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      mdiChevronDown,
      mdiChevronRight,
      items2: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }
  },
  name: 'customHeader',
}
</script>
<style scoped lang="scss"></style>
