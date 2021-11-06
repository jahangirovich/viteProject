<template>
  <v-app>
    <mySidebar />
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </v-app>
</template>

<script lang="ts">
import Sidebar from '../../components/Sidebar.vue'
export default {
  name: 'home',
  components: {
    mySidebar: Sidebar,
  },
}
</script>
