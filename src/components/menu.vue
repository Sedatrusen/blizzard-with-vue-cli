<template>
  <div>
    <div class="menu">
      <ul>
        <li id="birinci">
          <router-link to="/" class="active" href="#home">
            <svg
              _ngcontent-c12
              class="home"
              aria-hidden="true"
              data-prefix="blz"
              data-icon="home"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 358.7"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M494.9,161.8L267.4,9.1c-6.9-4.6-15.9-4.6-22.8,0L17.1,161.8c-9.4,6.3-11.9,19-5.6,28.5 	c6.3,9.4,19,11.9,28.5,5.6L75.5,172v131.9c0,27.2,21.5,49.2,47.9,49.2h265.2c26.4,0,47.9-22.1,47.9-49.2V172l35.5,23.8 	c3.5,2.3,7.5,3.5,11.4,3.5c6.6,0,13.1-3.2,17-9.1C506.8,180.9,504.3,168.1,494.9,161.8z M395.6,144.7v159.2c0,4.5-3.1,8.2-6.9,8.2 	H123.4c-3.8,0-6.9-3.7-6.9-8.2V145.7c0-0.4-0.1-0.8-0.1-1.1L256,50.7l139.6,93.7C395.6,144.6,395.6,144.6,395.6,144.7z"
              />
            </svg>Home
          </router-link>
        </li>
        <li class="dropdown">
          <router-link v-on:click="kapa" to="/" class="dropbtn">
            Games
            <i class="fas fa-angle-down"></i>
          </router-link>
          <div class="dropdown-content" v-show="show">
            <div class="yazi">BLIZZARD GAMES</div>
            <router-link to="/wow">
              <img class="resimler" src="../assets/wwkucuk.svg" alt />World of Warcraft
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/overwatch.svg" alt />Overwatch
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/diablo-iii.svg" alt />Diablo III
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/hearthstone.svg" alt />Hearthstone
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/heroes-of-the-storm.svg" alt />Heroes Of The Storm
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/starcraft-ii.svg" alt />Starcraft II
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/starcraft-remastered.svg" alt />Starcraft
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/diablo-ii.svg" alt />Diablo II
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/warcraft-iii.svg" alt /> Warcraft III
            </router-link>

            <div class="yazi">PARTNER GAMES</div>
            <router-link to="/">
              <img class="resimler" src="../assets/call-of-duty-mw.svg" alt />Call of Duty:MW
            </router-link>
            <router-link to="/">
              <img class="resimler" src="../assets/call-of-duty.svg" alt />Call of Duty:BO4
            </router-link>
          </div>
        </li>
        <li class="dropdown">
          <router-link to="/" href="javascript:void(0)" class="dropbtn">
            Services
            <i class="fas fa-angle-down"></i>
          </router-link>

          <div class="dropdown-content">
            <router-link to="/">Battletag Chance</router-link>
            <router-link to="/">BlizzCon Ticket</router-link>
            <router-link to="/">Reedem Code</router-link>
          </div>
        </li>
        <li>
          <router-link to="/" href="#about">Blizzard Gear</router-link>
        </li>
        <li>
          <button class="buton" type="button">
            <svg
              _ngcontent-c12
              class="simge"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="ticket-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M128 160h320v192H128V160zm400 96c0 26.51 21.49 48 48 48v96c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48v-96c26.51 0 48-21.49 48-48s-21.49-48-48-48v-96c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v96c-26.51 0-48 21.49-48 48zm-48-104c0-13.255-10.745-24-24-24H120c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V152z"
              />
            </svg>BlizzCon Virtual Ticket
          </button>
        </li>

        <li>
          <div class="arama">
            <svg
              _ngcontent-c21
              class="aramasimge"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="search"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
            <input class="arama1" type=" text" placeholder="Search Shop" />
          </div>
        </li>

        <li>
          <router-link to="/" class="whislist" href="#about">
            <svg class="whish">
              <path
                d="M14.4374656,1.96877868 C15.0832975,2.5104439 15.531213,3.1771093 15.7812124,3.96877392 C16.0312118,4.76043854 16.0676702,5.55731164 15.8905871,6.35939322 C15.713504,7.1614748 15.3332969,7.85418116 14.7499648,8.43751326 L8.71872921,14.6874984 C8.51039622,14.8958314 8.27081377,14.9999976 7.99998093,14.9999976 C7.72914808,14.9999976 7.48956564,14.8958314 7.28123264,14.6874984 L1.24999702,8.46876319 C0.666664918,7.86459812 0.286457809,7.1614748 0.109374739,6.35939322 C-0.0677083308,5.55731164 -0.0312499255,4.76043854 0.218749478,3.96877392 C0.468748882,3.1771093 0.911456319,2.5104439 1.54687131,1.96877868 C2.1822863,1.42711347 2.88540963,1.11461421 3.65624128,1.03128092 C4.34373964,0.947947626 5.04165449,1.0416974 5.74998629,1.31253025 C6.39581824,1.56252965 6.93748346,1.91669532 7.37498242,2.37502772 L7.99998093,3.03127615 L8.62497944,2.37502772 C9.14581169,1.8333625 9.75518523,1.44794643 10.4531001,1.21878047 C11.1510149,0.989614512 11.8541382,0.937531143 12.56247,1.06253085 C13.2708019,1.18753055 13.8958004,1.48961332 14.4374656,1.96877868 Z M14.0312165,7.7500149 C14.4478821,7.33334939 14.7343399,6.81772562 14.8905895,6.20314359 C15.0468391,5.58856156 15.0416306,4.98960497 14.8749645,4.40627287 C14.687465,3.73960796 14.3280908,3.1823173 13.7968421,2.73440186 C13.2655934,2.28648642 12.6770533,2.04169502 12.0312213,2.00002861 C11.5103891,1.97919517 10.9791403,2.09377839 10.4374751,2.34377779 C9.97914272,2.53127734 9.61456057,2.78127675 9.34372772,3.093776 L7.99998093,4.46877272 L6.65623413,3.093776 C6.36456832,2.78127675 5.99998569,2.52086086 5.56248674,2.31252787 C5.02082152,2.06252846 4.48957279,1.9583622 3.96874054,2.00002861 C3.32290859,2.04169502 2.73436848,2.28648642 2.20311975,2.73440186 C1.67187101,3.1823173 1.31249687,3.73960796 1.12499732,4.40627287 C0.958331207,4.98960497 0.953122728,5.58856156 1.10937236,6.20314359 C1.26562198,6.81772562 1.55207979,7.33334939 1.96874531,7.7500149 L7.99998093,14 L14.0312165,7.7500149 Z"
              />
            </svg>Whish List
          </router-link>
        </li>
        <li class="dropdown">
          <router-link to="/" class="dropbtn">
            Blizard Balance
            <i class="fas fa-angle-down"></i>
          </router-link>
          <div class="dropdown-content">
            <router-link to="/">Add balance</router-link>
            <router-link to="/">Gift balance</router-link>
            <router-link to="/">Reedem Code</router-link>
            <router-link to="/">Add Pre-Paid card</router-link>
            <router-link to="/">Balance History</router-link>
            <router-link to="/">Balance help</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { show: true };
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

<style  scoped>
ul {
  height: 40px;
  background-color: #032041;
  list-style-type: none;

  overflow: hidden;
}

li {
  display: block;
  background-color: #032041;
  float: left;
}
#birinci {
  margin-left: 8%;
}

li a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  color: white;
}
.home {
  height: 14px;
  width: 14px;
}
li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: black;
  z-index: 2;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  font-size: 12px;
}

.dropdown-content a {
  background-color: black;
  height: 20px;
  text-decoration: none;
  display: block;
  text-align: left;
  border: #f1f1f1;
}

.dropdown-content a:hover {
  background-color: #1a1919;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.resimler {
  height: 20px;
  width: 20px;
  padding: 0 8 0 0;
}
.yazi {
  padding-top: 5px;
  background-color: black;
  font-size: 12px;
  color: rgb(153, 149, 149);
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
.buton {
  background-color: #00649c;
  color: white;

  margin-top: 10px;
  height: 30px;
  width: 200px;
  display: block;
  background-image: linear-gradient(
    -45deg,
    rgb(0, 100, 156),
    rgb(14, 134, 202),
    rgb(0, 100, 156)
  );
  border: none;
}
.simge {
  fill: rgba(255, 255, 255, 0.8);
  width: 15px;
  height: 10px;
}
.aramasimge {
  fill: rgba(255, 255, 255, 0.8);
  color: #00649c;
  width: 14px;
  height: 14px;
}
.menu {
  margin-top: 0;
  width: 100%;
  height: 40px;
}
.arama {
  background-color: transparent;
  margin-left: 30%;
  width: 500px;
  padding-left: 30px;
}
.arama1 {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  background-color: transparent;
  border: 0px;
  color: white;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 100%;
  width: 450px;
}
.whishlist {
  background-color: white;
  z-index: 1;
  position: relative;
  display: block;
  align-items: stretch;
  padding: 0 18px;
  border-style: solid;
  border-color: red;
}
.whish {
  fill: white;
  height: 14px;
  width: 14px;
}
</style>