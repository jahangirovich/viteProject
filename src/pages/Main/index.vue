<template>
  <v-app>
    <v-main class="bg-bg">
      <customSidebar />
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Sidebar from '../../components/Sidebar.vue'
export default {
  name: 'home',
  components: {
    customSidebar: Sidebar,
  },
}
</script>

<style lang="scss" scoped></style>
