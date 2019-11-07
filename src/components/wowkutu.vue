<template>
  <div>
    <ul id="example-1">
      <li
        v-for="item in items"
        :key="item.id"
        :style="{ backgroundImage: 'url('+item.arkafon+')' }"
      >
        <router-link :to="item.path">
          <img class="kucuk-simge" :src="item.simge" alt />
          <p class="rec-yazi">{{item.yazi1}}</p>
          <p class="rec-yazi2">{{item.yazi2}}</p>
        </router-link>
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
          arkafon: require("../assets/w1.png"),
          simge: require("../assets/recwow.svg"),
          yazi1: "World of Warcraft® Subscription - 1 Month",
          yazi2: "EUR12.99/month",
          path: "/wowsayfa"
        },
        {
          id: 1,
          arkafon: require("../assets/w6.png"),
          simge: require("../assets/recwow.svg"),
          yazi1: "World of Warcraft® Subscription - 6 Months",
          yazi2: "Eur 10.99/month",
          path: "/"
        },

        {
          id: 1,
          arkafon: require("../assets/wowpaket.jpg"),
          simge: require("../assets/recwow.svg"),
          yazi1: "Hex and Flex Bundles",
          yazi2: "From Eur 19.99",
          path: "/"
        },
        {
          id: 1,
          arkafon: require("../assets/hsrec.jpg"),
          simge: require("../assets/recwow.svg"),
          yazi1: "Hex and Flex Bundles",
          yazi2: "From Eur 19.99",
          path: "/"
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
a {
  text-decoration: none;
}
</style>