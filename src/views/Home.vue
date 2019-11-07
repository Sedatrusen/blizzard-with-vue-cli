<template>
  <div class="home">
    <orta />
    <kucukorta />
  </div>
</template>

<script>
// @ is an alias to /src
import orta from "@/components/orta.vue";
import kucukorta from "@/components/kucukorta.vue";
export default {
  name: "home",
  components: { orta, kucukorta }
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
