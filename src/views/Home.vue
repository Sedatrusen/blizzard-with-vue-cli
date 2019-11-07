<template>
  <div class="home">
    <orta />
  </div>
</template>

<script>
// @ is an alias to /src
import orta from "@/components/orta.vue";
export default {
  name: "home",
  components: { orta }
};
</script>
<style  scoped>
.home {
  width: 100%;

  background-repeat: initial;
  background-size: 100% 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
</style>
