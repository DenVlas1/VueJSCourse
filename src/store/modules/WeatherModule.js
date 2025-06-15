import { getWeather, getCoordinatesByCity } from "@/store/Weather/weatherAPI";

const state = {
  locationName: "",
  forecast: [],
  current: null,
  loading: false,
  error: null,
};
const mutations = {
  setLocation(state, name) {
    state.locationName = name;
  },
  setWeatherData(state, { daily, current }) {
    state.forecast = daily;
    state.current = current;
  },
};
// передача данних про погоду
// Спочатку отримуємо назву міста а після широту довготу
// В кінці записуємо в локальне сховище щоб виводити її в /weather перед кнопкою оновлення
const actions = {
  async fetchWeatherByCity({ commit }, cityName) {
    try {
      const { latitude, longitude, name } = await getCoordinatesByCity(
        cityName
      );
      commit("setLocation", name);
      const data = await getWeather(latitude, longitude);
      commit("setWeatherData", data);
      localStorage.setItem("forecast", JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  },
  // вивід даних про погоду з локального сховища
  loadLocalForecast({ commit }) {
    const saved = localStorage.getItem("forecast");
    if (saved) {
      const parsed = JSON.parse(saved);
      commit('setWeatherData', parsed);
    }
  },
};
const getters = {
  getForecast: (state) => state.forecast,
  getCurrentWeather: (state) => state.current,
  getLocationName: (state) => state.locationName,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
