<template>
  <div class="benim" v-show="value">
    <div class="dıs">
      <router-link class="ic" to="/login">
        <button>Log in</button>
      </router-link>
    </div>
    <div>
      <div class="dıs">
        <router-link class="ic" to="/login">
          <i class="fas fa-cog"></i>Account Setting
        </router-link>
      </div>
      <div class="dıs">
        <router-link class="ic" to="/account">
          <i class="fas fa-user-plus"></i>
          Create Free Account
        </router-link>
      </div>
    </div>
  </div>
</template>

    <script>
export default {
  name: "Modal",
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    }
  }
};
</script>


    <style  >
.benim {
  margin-top: 10px;
  position: relative;
  align-self: auto;
  left: 80%;
  text-align: center;
  z-index: 20;
  right: 100px;
  width: 300px;
  height: 150px;
  background-color: #142435;
}
.benim button {
  margin-top: 10px;
  height: 40px;
  width: 280px;
  background-color: #0e86ca;
  border: none;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.benim button:hover {
  background-color: #2ea1e4;
}
.benim div {
  vertical-align: middle;
  height: 50px;
}
.dıs {
  display: table;
}
.ic {
  display: table-cell;
  vertical-align: middle;
  /* Div içerisindeki yazıyı yatay olarak ortalamak için text-align:center özelliğini kullanıyorum.
  http://www.sinanbozkus.com/css-ile-dikey-ortalama-vertical-align/ */
  text-align: center;
}
.benim a {
  text-decoration: none;
  color: rgb(180, 175, 175);
}
</style>