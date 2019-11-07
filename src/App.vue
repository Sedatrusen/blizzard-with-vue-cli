<template>
  <div id="app">
    <navbar />
    <menus></menus>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import menus from "@/components/menu.vue";
export default {
  components: { navbar, menus }
};
</script>

<style>
</style>
