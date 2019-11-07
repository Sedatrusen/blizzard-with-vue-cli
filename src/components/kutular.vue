<template>
  <div>
    <ul id="example-1">
      <li
        v-for="item in items"
        :key="item.id"
        :style="{ backgroundImage: 'url('+item.arkafon+')' }"
      >
        <img class="kucuk-simge" :src="item.simge" alt />
        <p class="rec-yazi">{{item.yazi1}}</p>
        <p class="rec-yazi2">{{item.yazi2}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          arkafon: require("../assets/hsrec.jpg"),
          simge: require("../assets/rechs2.svg"),
          yazi1: "Hex and Flex Bundles",
          yazi2: "From Eur 19.99"
        },
        {
          id: 1,
          arkafon: require("../assets/rechots.jpg"),
          simge: require("../assets/recwow.svg"),
          yazi1: "Transmorpher Beacon",
          yazi2: "Eur 10.00"
        },

        {
          id: 1,
          arkafon: require("../assets/wow1.png"),
          simge: require("../assets/recwow.svg"),
          yazi1: "World of Warcraft®  Subscription - 1 Month ",
          yazi2: "Eur 12.99/month"
        },
        {
          id: 1,
          arkafon: require("../assets/hsrec.jpg"),
          simge: require("../assets/rechs2.svg"),
          yazi1: "Hex and Flex Bundles",
          yazi2: "From Eur 19.99"
        },
        {
          id: 1,
          arkafon: require("../assets/hsrec.jpg"),
          simge: require("../assets/rechs2.svg"),
          yazi1: "Hex and Flex Bundles",
          yazi2: "From Eur 19.99"
        }
      ]
    };
  }
};
</script>


<style scoped>
ul {
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
}

ul li {
  width: 250px;
  height: 450px;
  margin-left: 10px;
  margin-right: 20px;
  display: block;
  float: left;
  background-size: 250px 450px;
  background-repeat: no-repeat;
  /* Add a thin border to each list item */
  margin-top: -1px; /* Prevent double borders */
  /* Add a grey background color */
  padding: 12px; /* Add some padding */
}
/*https://www.w3schools.com/howto/howto_css_list_group.asp*/
ul li:hover {
  transform: scale(1.1);
}
.kucuk-simge {
  margin-top: 200px;
  height: 35px;
  width: 35px;
}
.rec-yazi {
  display: block;
  z-index: 2;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
.rec-yazi2 {
  display: block;
  position: relative;
  z-index: 2;
  margin-top: 100px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
}
</style>