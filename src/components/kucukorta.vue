<template>
  <div class="aralık">
    <div class="blizardgames"></div>
    <p class="aralık-yazı">BLIZZARD GAMES</p>
    <div class="simgeler">
      <img class="aralık-simge" src="../assets/aralık1.svg" />
      <img class="aralık-simge" src="../assets/aralık2.svg" />
      <img class="aralık-simge" src="../assets/aralık3.svg" />
      <img class="aralık-simge" src="../assets/aralık4.svg" />
      <img class="aralık-simge" src="../assets/aralık5.svg" />
      <img class="aralık-simge" src="../assets/aralık6.svg" />
      <img class="aralık-simge" src="../assets/aralık7.svg" />
      <img class="aralık-simge" src="../assets/aralık8.svg" />
      <img class="aralık-simge" src="../assets/aralık9.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aralık-simge:hover {
  transform: scale(1.1);
}
.aralık {
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}
.aralık-yazı {
  margin-left: 30%;
  font-size: 14px;
  line-height: 1.3;
  color: white;

  float: left;
}
.aralık-simge {
  height: 40px;
  width: 40px;
  margin-left: 5px;
  float: center;
}
</style>