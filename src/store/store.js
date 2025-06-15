import Vue from "vue";
import Vuex from "vuex";
import vehicles from "./modules/vehicles";
import weather from "./modules/WeatherModule";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vehicles,
    weather,
  },
});
