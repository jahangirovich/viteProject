<template>
  <div class="main">
    <div class="header">Here is the header</div>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>
