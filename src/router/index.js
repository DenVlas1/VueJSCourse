import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "@/components/HomeView.vue";
import About from "@/components/AboutView.vue";
import Contact from "@/components/ContactView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default new VueRouter({
  mode: "history",
  routes,
});
