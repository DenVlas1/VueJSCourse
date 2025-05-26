import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    addVehicleInfo(state, payload) {
      state.products.push(payload);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeVehicleInfo(state, payload) {
      state.products.splice(payload, 1);
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    initializeStore(state) {
      const data = localStorage.getItem("products");
      if (data) {
        state.products = JSON.parse(data);
      }
    },
  },
  getters: {
    getVehicleInfo(state) {
      return state.products;
    },
  },
});
