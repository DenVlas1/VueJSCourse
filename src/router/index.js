import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "/src/components/HomeView.vue";
import About from "/src/components/AboutView.vue";
import Contact from "/src/components/ContactView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default new VueRouter({
  mode: "history",
  routes,
});
