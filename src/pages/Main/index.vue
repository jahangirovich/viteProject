<template>
  <v-app>
    <v-main class="bg-bg">
      <sidebar />
      <div class="content pa-5">
        <customHeader />
        <div class="subheader">
          <h2 class="mt-4 text-h5 font-weight-bold">Животные</h2>
          <v-tabs v-model="model" align-with-title class="mt-4 transparent">
            <v-tabs-slider class="accent"></v-tabs-slider>
            <v-tab
              v-for="(item, i) in tabs"
              :key="i"
              :to="item.link"
              :class="
                'mt-0 ml-0 mr-5' +
                ($route.name === item.link_name
                  ? ' accent--text'
                  : ' gray_secondary--text')
              "
            >
              <span class="font-weight-bold text-body-2">{{ item.name }}</span>
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="model">
            <v-tab-item v-for="(item, i) in tabs" :key="i" :value="item.link">
              <div class="wrapper mt-3">
                <router-view :key="$route.path"></router-view>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { sidebar: Sidebar },
  data() {
    return {
      model: false,
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
      tabs: [
        {
          name: 'Список',
          link: '/home/stalls',
          link_name: 'stalls',
        },
        {
          name: 'Группы',
          link: '/home/animals',
          link_name: 'animals',
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
  margin-left: auto;
}

.theme--light.v-tabs-items {
  background-color: transparent !important;
}
.v-tab {
  padding: 0 4px !important;
  min-width: 50px !important;
}
@media screen and (max-width: 959px) {
  .content {
    width: 100%;
    margin: auto;
  }
}
</style>
