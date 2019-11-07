<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <menus></menus>
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
#app {
  background-image: url("assets/left.png");
  width: 100%;
  background-image: url(assets/left.png);
  background-repeat: initial;
  background-size: 100% 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
</style>
