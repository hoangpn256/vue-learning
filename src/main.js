import Vue from "vue";
import App from "./App.vue";
import VueLazyload from "vue-lazyload";
// Bootstrap import
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VuejsDialog from "vuejs-dialog";
import "vuejs-dialog/dist/vuejs-dialog.min.css";
import router from "@/routes";
import store from "@/store/index"

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  loading: "loading.gif"
});
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(VuejsDialog);
// config
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
