<template>
  <div class="ortalama">
    <div class="ortaiç">
      <div id="logo">
        <img src="../assets/blizzlogo.png" alt />
      </div>
      <div class="emailout">
        <h1>Create an account</h1>
      </div>
      <div class="emailout">
        <button class="sosyal" type="submit">
          <img src="../assets/facebookimg.png" alt /> Facebook
        </button>
        <button class="sosyal" type="submit">
          <img src="../assets/googleimg.png" alt /> Google
        </button>
      </div>
      <div class="emailout">
        <span>Or</span>
      </div>
      <div class="emailout">
        <p>Start your adventures with a Blizzard Account.</p>
      </div>
      <div class="emailout">
        <p>
          Parents registering for children,
          <a
            href="/account/creation/en/parent-signup.html?country=TUR&amp;ret=&amp;theme=blizzard"
          >click here.</a>
        </p>
      </div>
      <div class="emailout">
        <select>
          <option value="volvo">Türkiye</option>
          <option value="saab">Afrika</option>
          <option value="opel">İngiltere</option>
          <option value="audi">Rusya</option>
        </select>
      </div>

      <div id="borders">
        <div class="emailout">
          <input
            v-bind:style="{ 'border-color': namecolor }"
            class="input1"
            v-model="Firstname"
            type="text"
            placeholder="Firstname"
          />
          <input
            class="input1"
            v-bind:style="{ 'border-color': surnamecolor }"
            v-model="Surname"
            type="text"
            placeholder="Surname"
          />
        </div>
        <div class="emailout">
          <input
            class="tarih"
            v-bind:style="{ 'border-color': tarihcolor }"
            v-model="Tarih"
            type="text"
            placeholder="Tarih"
          />
          <input
            class="tarih"
            v-model="Day"
            type="text"
            v-bind:style="{ 'border-color': daycolor }"
            placeholder="Day"
          />
          <input
            class="tarih"
            v-bind:style="{ 'border-color': yearcolor}"
            v-model="Year"
            type="text"
            placeholder="Year"
          />
        </div>
        <div class="emailout">
          <input
            v-model="email"
            v-bind:style="{ 'border-color': emailcolor }"
            type="text"
            placeholder="Email adres"
          />
        </div>
        <div class="emailout">
          <input
            v-model="password"
            v-bind:style="{ 'border-color': passcolor }"
            type="text"
            placeholder="Password"
          />
        </div>
        <div class="emailout">
          <select>
            <option value="volvo">Select a Question</option>
            <option value="saab">What was the first car you owned?</option>
            <option value="opel">What was the street you lived on in high school?</option>
            <option value="audi">Where was the first place you flew?</option>
          </select>
        </div>
        <div class="emailout">
          <input
            v-model="answer"
            v-bind:style="{ 'bordercolor': answer-color }"
            type="text"
            placeholder="Secret Answer"
          />
        </div>

        <div class="emailout">
          <button
            v-on:click="tiklama(Firstname,Surname,Tarih,Day,Year,email,password,answer)"
          >Create a free account</button>
        </div>
      </div>
      <div class="emailout">
        <button id="özelbuton" v-on:click="login">Already have a account?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  title: "Blizzard Account",
  data() {
    return {
      namecolor: "rgba(255,255,255,0.3)",
      tarihcolor: "rgba(255,255,255,0.3)",
      daycolor: "rgba(255,255,255,0.3)",
      surnamecolor: "rgba(255,255,255,0.3)",
      passcolor: "rgba(255,255,255,0.3)",
      answercolor: "rgba(255,255,255,0.3)",
      yearcolor: "rgba(255,255,255,0.3)",
      emailcolor: "rgba(255,255,255,0.3)"
    };
  },
  methods: {
    login: function() {
      window.location = "login.html";
    },
    tiklama: function(
      Firstname,
      Surname,
      Tarih,
      Day,
      Year,
      email,
      password,
      answer
    ) {
      if (Firstname == null) {
        this.namecolor = "red";
      }
      if (Tarih == null) {
        this.tarihcolor = "red";
      }
      if (Day == null) {
        this.daycolor = "red";
      }
      if (Surname == null) {
        this.surnamecolor = "red";
      }
      if (Year == null) {
        this.yearcolor = "red";
      }
      if (email == null) {
        this.emailcolor = "red";
      }
      if (password == null) {
        this.passcolor = "red";
      }

      if (answer == null) {
        this.answercolor = "red";
      }
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 1400px;
  background-color: black;
  background-image: url(../assets/loginarkaplan.jpg);
  font-family: "Blizzard", "Arial", "Helvetica", "Segoe UI Symbol",
    "Segoe MDL2 Assets", sans-serif;
  font-size: 15px;
  line-height: 20px;
  color: white;
  z-index: 20;
}
h1 {
  color: white;
  font-family: "Blizzard", "Arial", "Helvetica", "Segoe UI Symbol",
    "Segoe MDL2 Assets", sans-serif;
}

a {
  text-decoration: none;
}

a:hover {
  color: white;
}

.ortalama {
  margin-top: 100px;
  margin-left: 20%;
  margin-right: 20%;
  height: 100%;
  width: 60%;
}
.ortaiç {
  margin-top: 40px;
  height: 60%;
  width: 95%;
}
#logo {
  height: 28%;
  width: 20%;
  margin-right: 40%;
  margin-left: 40%;
}
.emailout {
  display: block;
  margin-left: 25%;
  width: 500px;
  height: 40px;
  margin-top: 10px;
  text-align: center;
}
input {
  display: inline-block;
  color: white;
  padding: 1%;
  width: 500px;
  margin: 5px 0;
  padding: 0 10px;
  font-size: 17px;
  line-height: 20px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.5);
}
input:hover {
  border-color: rgba(133, 127, 127, 0.808);
}
button {
  background-color: #00649c;
  color: white;
  width: 500px;
  margin-top: 10px;
  height: 40px;

  font-size: 17px;
  text-align: center;
  background-color: #0e86ca;
  color: #fff;
  border: 1px solid #10a1de;
  box-shadow: 0 0 rgba(0, 0, 0, 0);
  border-radius: 0;
  transition: background-color 0.2s, box-shadow 0.2s, background-color 0.2s,
    border-color 0.2s, color 0.2s;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset;
}

span {
  margin-top: 5px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
}
button:hover {
  background-color: #8bccf1da;
}
.sosyal {
  background: #005c99;
  line-height: 20px;
  width: 245px;
  height: 34px;
}
.others {
  margin-top: 5px;
  color: #00aeff;

  transition: color 0.2s;
}
.alt {
  position: relative;
  margin-top: -133px; /* altAlan yuksekliginin eksi degeri */
  height: 133px;
  clear: both;
}

.altyazı {
  bottom: 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: text-shadow 160ms ease, color 160ms ease;
}

.altyazıı {
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
}

.uyarı {
  padding: 1%;
  width: 360px;

  margin-left: 33%;

  font-size: 17px;
  line-height: 20px;

  color: white;
  text-align: center;
  background-color: #360e10;
  box-shadow: 0 0 0 1px #551e21 inset, 0 5px 10px rgba(0, 0, 0, 0.75);
}
select {
  color: white;
  padding: 1%;
  width: 500px;
  margin: 5px 0;
  padding: 0 10px;
  font-size: 17px;
  line-height: 20px;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(0, 0, 0, 0.5);
}
.input1 {
  width: 245px;

  float: left;
  position: relative;
  margin-left: 5px;
}
.tarih {
  width: 150px;
  float: left;
  margin-left: 10px;
}
#özelbuton {
  background-color: transparent;
}
</style>