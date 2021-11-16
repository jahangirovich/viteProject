<template>
  <v-app>
    <v-main class="bg">
      <sidebar />
      <div class="content pa-5">
        <customHeader />
        <router-view :key="$route.path"></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: { sidebar: Sidebar },
  data() {
    return {}
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
