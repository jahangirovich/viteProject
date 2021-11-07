<template>
  <v-app>
    <v-main class="bg-bg">
      <sidebar />
      <v-container class="content p-5">
        <div class="header d-flex justify-between align-center">
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
          <div class="d-flex align-center">
            <v-badge :content="'1'" :value="'1'" color="blue" overlap class="mr-5">
              <v-img :src="require('../../assets/main/header/notification.svg')" class="relative right-2"/>
            </v-badge>
            <div>
              <v-avatar>
                <img
                  :src="require('../../assets/main/other/userProfile.png')"
                  alt=""
                  width="40px"
                  height="40px"
                />
              </v-avatar>
            </div>
          </div>
        </div>
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
          text: 'Животное 1',
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
  width: calc(100% - 256px);
  margin-right: 0;
}
@media screen and (max-width: 959px) {
  .content {
    width: 100%;
    margin: auto;
  }
}
</style>
