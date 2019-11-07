<template>
  <div class="wow">
    <div class="kontanyir">
      <img src="../assets/wowlogo.png" alt />

      <div class="grid-container">
        <div class="grid-item">
          <img id="wowlogo" src="../assets/recwow.svg" alt />
          <scan>World of Warcraft®: Subscription</scan>
        </div>
        <div id="sarı" class="grid-item">Includes access to World of Warcraft and WoW Classic!</div>
        <div class="grid-item">
          <p>6 Months - EUR10.99/month</p>
          <p>Save EUR24.00 per year</p>
        </div>
        <div class="grid-item">
          <p>Months - EUR11.99/month</p>
          <p>Save EUR12.00 per year</p>
        </div>
        <div class="grid-item">1 Month - EUR12.99/month</div>
        <div class="grid-item">
          <p>EUR12.99</p>
          <p>Billed every 1 month. Cancel online anytime.</p>
        </div>
        <div class="grid-item">
          <p>EUR12.99</p>
          <p>Billed every 1 month. Cancel online anytime.</p>
        </div>
        <div class="grid-item">
          <button class="button">Subscribe Now</button>
          <button class="button">Try</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sarı {
  background-color: yellow;
  color: black;
  height: 30px;
  font-size: 16px;
}
.wow {
  width: 100%;
  height: 1200px;
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
  border-bottom: 1px solid black;
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
.grid-item:hover {
  background-color: rgb(7, 101, 145);
}
</style>