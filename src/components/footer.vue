<template>
  <div class="footer">
    <button v-show="kapama" v-on:click="kapa">
      <i class="fas fa-sort-up"></i>
    </button>
    <div v-show="show">
      <div id="dunya">
        <i class="fas fa-globe-americas"></i>English(EU)
        <i class="fas fa-arrows-alt-v"></i>
      </div>
      <img class="footer" src="../assets/blizzlogo.png" alt />
      <ul>
        <li>CAREERS</li>
        <li>ABOUT</li>
        <li>SUPPORT</li>
        <li>CONTACT US</li>
        <li>PRESS</li>
        <li>API</li>
      </ul>

      <P>©2019 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</P>
      <p>All trademarks referenced herein are the properties of their respective owners.</p>
      <ul>
        <li>PRIVACY</li>
        <li>LEGAL</li>
        <li>TERMS</li>
        <li>COOKIES</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { show: true, kapama: true };
  },
  methods: {
    kapa: function() {
      if (this.show == true) {
        this.show = false;
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style >
/*https://www.w3schools.com/howto/howto_css_fixed_footer.asp-*/
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 300px;

  text-align: center;
  z-index: 3;
  text-align: center;
  align-items: center;
}
.footer img {
  position: relative;

  height: 60px;
  width: 100px;
}
.footer ul {
  align-items: center;
  position: relative;
  text-align: center;
  list-style-type: none;
  margin-left: 33%;
  overflow: hidden;
}
.footer ul li:hover {
  color: white;
}
.footer ul li {
  padding: 14px 16px;
  display: block;
  float: left;
}
.footer p {
  font-size: 10px;
}
#dunya:hover {
  color: white;
}
.footer button {
  height: 50px;
  width: 50px;
  font-size: 40px;
  text-align: inherit;
  float: right;
  background-color: black;
  border: none;
  color: #00649c;
  opacity: 0.4;
  margin-right: 30px;
}
.footer button:hover {
  color: white;
}
</style>