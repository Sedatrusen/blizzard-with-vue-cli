<template>
  <div class="wow">
    <div class="kontanyir">
      <img src="../assets/wowlogo.png" alt />

      <div class="grid-container">
        <div class="grid-item">
          <img id="wowlogo" src="../assets/recwow.svg" alt />
          <scan>World of Warcraft®: Subscription</scan>
        </div>
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
  margin-right: 10%;
  margin-top: 2%;
  float: right;
  width: 500px;
  height: 900px;
}
.grid-container {
  margin-top: 40%;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  background-color: #142435;
}
.grid-item {
  height: 100px;
  font-size: 20px;
  color: white;
}
#wowlogo {
  margin: 0;
  float: left;
  width: 60px;
  height: 60px;
}
</style>