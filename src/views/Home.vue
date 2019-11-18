<template>
  <div class="home">
    <orta />
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
// @ is an alias to /src
import orta from "@/components/orta.vue";
import kucukorta from "@/components/kucukorta.vue";
import kutu from "@/components/kutular.vue";
export default {
  name: "home",
  title: "Blizzard Shop",

  components: { orta, kucukorta, kutu }
};
</script>
<style  scoped>
.home {
  width: 100%;
  background-image: url("../assets/left.png");
  background-repeat: initial;
  background-size: 100% 100%;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.recommended {
  width: 100%;
  height: 1000px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.rec-in {
  padding-top: 40px;
  padding-left: 200px;
}

.rec-yazi {
  display: block;
  position: absolute;
  margin-top: 12%;
  margin-left: 20px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
.rec-yazi2 {
  display: block;
  position: absolute;
  margin-top: 20%;
  margin-left: 20px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>
