<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <menus></menus>
    </div>

    <router-view />

    <footers />
  </div>
</template>
<script>
import navbar from "@/components/navbar.vue";
import menus from "@/components/menu.vue";
import footers from "@/components/footer.vue";
export default {
  components: { navbar, menus, footers }
};
</script>

<style>
#app {
  width: 100%;

  background-repeat: initial;
  background-size: 100% 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  color: rgba(119, 116, 116, 0.8);
  background-image: url("assets/left.png");
  width: 100%;
  height: 100%;

  background-repeat: initial;
  background-size: cover;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
</style>
