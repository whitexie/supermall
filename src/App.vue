<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>

  </div>
</template>

<script>
import MainTabBar from "@/components/content/MainTabBar";
import router from "@/router/index"

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
