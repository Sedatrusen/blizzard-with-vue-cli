<template>
  <div class="ortalama">
    <div id="logo">
      <img src="blizzlogo.png" alt />
    </div>
    <div class="emailout">
      <h1>Can't log in</h1>
    </div>

    <div class="emailout">
      <p>We are sorry! There are several reasons you might not be able to log in. Check below for more information and possible solutions.</p>
    </div>

    <ul>
      <router-link to="/cantlogin">
        <li>
          <img src="../assets/1.png" alt /> I don't know my password
        </li>
      </router-link>
      <li>
        <img src="../assets/2.png" alt />My blizzard account is locked
      </li>

      <li>
        <img src="../assets/3.png" alt /> I need to remove my authenticator
      </li>
      <li>
        <img src="../assets/4.png" alt />I don't know my email address
      </li>
    </ul>
  </div>
</template>

<script>
export default { title: "Can't Login in?" };
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-color: black;
  background-image: url(../assets/loginarkaplan.jpg);
  font-family: "Blizzard", "Arial", "Helvetica", "Segoe UI Symbol",
    "Segoe MDL2 Assets", sans-serif;
  font-size: 15px;
  line-height: 20px;
  color: white;
}
h1 {
  color: white;
  font-family: "Blizzard", "Arial", "Helvetica", "Segoe UI Symbol",
    "Segoe MDL2 Assets", sans-serif;
}

.ortalama a {
  text-decoration: none;
}

.ortalama a:hover {
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
}

.ortalama ul {
  margin-left: 20%;

  display: block;

  position: relative;
  overflow: hidden;
}

.ortalama li {
  text-align: center;

  width: 160px;
  height: 115px;
  margin: 10px auto 0;
  margin-right: 10px;
  display: block;
  background-color: #19547c;
  border: 1px solid rgba(0, 174, 255, 0.5);
  border-radius: 2px;

  width: 140px;
  height: 200px;

  float: left;
}
.ortalama li:hover {
  background-color: rgb(84, 184, 230);
}
</style>