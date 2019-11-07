<template>
  <div class="wow">
    <div class="kontanyir">
      <img src="../assets/wowlogo.png" alt />

      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wow {
  width: 100%;
  height: 900px;
  background-size: cover;
  background-image: url(../assets/wowarkafon.jpg);
}
.wow img {
  float: right;
  width: 200px;
  height: 160px;
  margin-right: 30%;
}
.kontanyir {
  text-align: center;
  align-items: center;
  margin-right: 10%;
  margin-top: 2%;
  float: right;
  width: 500px;
  height: 900px;
}
.grid-container {
  margin-top: 10%;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  background-color: #2196f3;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>