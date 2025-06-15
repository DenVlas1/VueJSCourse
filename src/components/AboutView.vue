<template>
  <b-container>
    <b-row class="justify-content-center">
      <h1 v-if="getVehicleInfo.length === 0">Картки ще не створені</h1>
      <b-card
        v-for="(result, index) in getVehicleInfo"
        :key="index"
        border-variant="primary"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        class="text-center mt-4 m-2"
        style="width: 20rem"
      >
        <h5>Ім'я водія: {{ result.driverName }}</h5>
        <h5>Номер авто: {{ result.carNumber }}</h5>
        <h5>Вага авто: {{ result.carWeight }}</h5>
        <h5>температура : {{ result.weather.temperature }} °C</h5>
        <p>
          <b-img
            class="weather-image"
            :src="mapIcon(result.weather.weathercode)"
          ></b-img>
        </p>
        <b-button variant="danger" @click.prevent="onSubmit(index)">
          Видалити картку</b-button
        >
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
import { mapWeatherCodeToIcon } from "@/store/Weather/weatherIcons";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      resultData: [],
    };
  },
  computed: {
    ...mapGetters("vehicles", ["getVehicleInfo"]),
  },

  methods: {
    mapIcon(code) {
      return mapWeatherCodeToIcon(code);
    },
    ...mapActions("vehicles", ["removeVehicle"]),
    onSubmit(payload) {
      this.removeVehicle(payload);
    },
  },
};
</script>

<style scoped>
.weather-image {
  width: 36px;
  height: 36px;
}
</style>
