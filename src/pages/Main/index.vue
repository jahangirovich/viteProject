<template>
  <v-app>
    <v-main class="bg-bg">
      <sidebar />
      <v-container class="content p-5">
        <v-breadcrumbs :items="items" class="m-none p-0 pl-0">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
              :href="item.href"
              :class="item.disabled ? '' : 'underline'"
            >
              {{ item.text }}
            </v-breadcrumbs-item>
          </template>
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from '../../components/Sidebar.vue'
export default {
  components: { sidebar: Sidebar },
  data() {
    return {
      items: [
        {
          text: 'Животные',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Животные 1',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }
  },
  name: 'home',
}
</script>

<style lang="scss" scoped>
.content {
  margin-left: 256px;
}
@media screen and (max-width: 900px) {
  .content {
    margin-left: 0;
  }
}
</style>
