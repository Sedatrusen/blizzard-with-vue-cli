import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import titleMixin from "./mixins/titleMixin";
import VModal from "vue-js-modal";
import Default from "./layouts/Default.vue";
import NoSidebar from "./layouts/no-side.vue";

Vue.component("default-layout", Default);
Vue.component("no-sidebar-layout", NoSidebar);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
new Vue({ router, store, render: h => h(App) }).$mount("#app");
Vue.mixin(titleMixin);
Vue.use(VModal);
