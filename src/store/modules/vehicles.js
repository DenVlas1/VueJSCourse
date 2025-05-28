const state = {
  products: [],
  userId: 1,
};
const mutations = {
  addVehicleInfo(state, payload) {
    state.products.push(payload);
  },
  removeVehicleInfo(state, payload) {
    state.products.splice(payload, 1);
  },
  initializeStore(state, newData) {
    state.products = newData;
  },
};
const actions = {
  addVehicle({ commit, state }, payload) {
    commit("addVehicleInfo", payload);
    localStorage.setItem("products", JSON.stringify(state.products));
  },
  removeVehicle({ commit, state }, payload) {
    commit("removeVehicleInfo", payload);
    localStorage.setItem("products", JSON.stringify(state.products));
  },
  loadVehicle({ commit }) {
    const data = localStorage.getItem("products");
    if (data) {
      let parsed;
      parsed = JSON.parse(data);
      commit("initializeStore", parsed);
    }
  },
};
const getters = {
  getVehicleInfo(state) {
    return state.products;
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
