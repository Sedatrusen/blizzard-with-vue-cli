<template>
  <div class="legal">
    <navbar />
    <div id="h1">
      <h1>BLIZZARD LEGAL</h1>
    </div>
    <div class="liste">
      <ul>
        Blizzard Entertainment
        <li>Blizzard End User License Agreement</li>
        <li>Terms of Use for Blizzard's Websites</li>
        <li>Online Privacy Policy</li>
      </ul>
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
#h1 {
  margin-top: 30%;
}
.legal {
  text-align: center;
  color: white;
  vertical-align: middle;
}
.liste ul {
  list-style-type: none;
}
.liste li {
}
</style>