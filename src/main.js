import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
