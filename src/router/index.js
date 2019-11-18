import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const base =
  process.env.NODE_ENV === "production"
    ? "/Layout-system-with-vue-and-vue-router/"
    : "/";

export default new VueRouter({
  mode: "history",
  base,

  routes: [
    {
      path: "/",
      name: "home",

      component: require("../views/Home.vue").default // load sync home
    },
    {
      path: "/wow",
      name: "wow",

      component: () => import("../views/wow.vue")
    },
    {
      path: "/wowsayfa",
      name: "wowsayfa",

      component: () => import("../views/wowsayfa.vue")
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/Login.vue")
    },
    {
      path: "/account",
      name: "account",

      component: () => import("../views/account.vue")
    },
    {
      path: "/cantlog",
      name: "cantlog",

      component: () => import("../views/cantlog.vue")
    },
    {
      path: "/cantlogin",
      name: "cantlogin",

      component: () => import("../views/cantlogin.vue")
    }
  ]
});
