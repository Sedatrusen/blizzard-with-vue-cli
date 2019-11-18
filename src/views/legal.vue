<template>
  <div class="legal">
    <navbar />
    <div>
      <h1>BLIZZARD LEGAL</h1>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/navbarlegal.vue";
export default {
  components: { navbar }
};
</script>


<style>
html {
  background-image: url("../assets/legalarkafon.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgb(1, 32, 61);
}
.legal {
  text-align: center;
  color: white;
  vertical-align: middle;
}
</style>