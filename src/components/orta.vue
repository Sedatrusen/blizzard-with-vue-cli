<template>
  <div class="orta" id="orta">
    <img class="arka-fon" :src="image" />
    <div class="info">
      <img class="resimler" :src="image2" />
      <p>{{parca}}</p>
      <button class="button">{{buton}}</button>
    </div>

    <button class="butonlar" v-on:click="orta1()"></button>
    <button class="butonlar" id="buton2" v-on:click="orta2()"></button>
    <button class="butonlar" id="buton3" v-on:click="orta3"></button>
    <button class="butonlar" id="buton4" v-on:click="orta4"></button>
  </div>
</template>

<script>
export default {
  el: "#orta",
  data: function() {
    return {
      image: require("../assets/orta2.jpg"),
      image2: require("../assets/orta2.2.png"),
      parca: "UNLOCK IN-GAME REWARDS",
      buton: "Buy Now"
    };
  },

  methods: {
    orta1: function() {
      this.image = require("../assets/orta1.jpg");
      this.image2 = require("../assets/orta1.1.png");
      this.parca = "UNLOCK IN-GAME REWARDS";
      this.buton = "Buy Now";
    },
    orta2: function() {
      this.image = require("../assets/orta2.jpg");
      this.image2 = require("../assets/orta2.2.png");
      this.parca = "PURCHASE AND GET THE XRK WEAPONS PACK AT LAUNCH";
      this.buton = "Pre-Purchase";
    },
    orta3: function() {
      this.image = require("../assets/orta3.jpg");
      this.image2 = require("../assets/orta3.3.png");
      this.parca = "SAVE BIG ON BATTLE FOR AZEROTH";
      this.buton = "Buy Now";
    },
    orta4: function() {
      this.image = require("../assets/orta4.jpg");
      this.image2 = require("../assets/orta4.4.png");
      this.parca = "THE ALL- NEW SOLO ADVENTURE";
      this.buton = "Buy Now";
    }
  }
};
</script>

<style>
.orta {
  width: 100%;
  height: 300px;
  display: block;
}
.info {
  margin-left: 10%;
  left: 100px;
  top: 150px;

  text-align: center;
  display: inline;
  position: absolute;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.resimler {
  height: 150px;
  width: 250px;
}

.button {
  height: 40px;
  width: 280px;
  background-color: #0e86ca;
  border: none;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.button:hover {
  background-color: #83cefa;
}
.butonlar {
  position: absolute;
  top: 385px;
  left: 40%;
  height: 5px;
  width: 100px;
  background: #869791;
  border: 0px solid;
  border-color: transparent;
  border-radius: 5px;
}
.butonlar:hover {
  background-color: #535c59;
}
#buton2 {
  margin-left: 120px;
}
#buton3 {
  margin-left: 230px;
}
#buton4 {
  margin-left: 340px;
}
.arka-fon {
  width: 100%;
  height: 300px;
}
</style>