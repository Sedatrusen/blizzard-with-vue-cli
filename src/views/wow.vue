<template>
  <div class="wow">
    <div class="orta" id="orta">
      <img class="arka-fon" src="../assets/wowbuyuk.jpg" />
      <div class="info">
        <img class="resimler" src="../assets/wowsayfakucuk.png" />
      </div>
    </div>
    <kucukorta />
    <div class="recommended">
      <div class="rec-in">
        <p>RECOMMENDED</p>

        <kutu />
      </div>
    </div>
  </div>
</template>
<script>
import kucukorta from "@/components/kucukorta.vue";
import kutu from "@/components/kutular.vue";
export default {
  name: "home",

  components: { kutu, kucukorta }
};
</script>
<style scoped>
.wow {
  width: 100%;

  background-repeat: initial;
  background-size: 100% 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.recommended {
  align-self: center;
  width: 100%;
  height: 1000px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.rec-in {
  padding-top: 40px;
  padding-left: 200px;
}
</style>