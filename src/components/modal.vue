<template>
  <div class="benim" v-show="value">
    <div>
      <button>Log in</button>
    </div>
    <div>
      <div>
        <router-link to="/">Account Setting</router-link>
      </div>
      <div>
        <router-link to="/">Account Setting</router-link>
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
  position: relative;
  align-self: auto;
  left: 80%;
  text-align: center;
  z-index: 20;
  right: 100px;
  width: 400px;
  height: 300px;
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
</style>