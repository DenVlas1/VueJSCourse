<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <b-alert variant="success" v-model="showOkAlert" fade
          >Дані збережені</b-alert
        >
        <h2 class="text-center mb-4">Картка даних про водія</h2>
        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Номер авто" label-for="carNumber">
            <b-form-input
              id="carNumber"
              v-model.number="form.carNumber"
              required
            />
          </b-form-group>

          <b-form-group label="Ім'я водія" label-for="driver-Name">
            <b-form-input id="driver-Name" v-model="form.driverName" required />
          </b-form-group>

          <b-form-group label="Вага авто" label-for="carWeight">
            <b-form-input
              id="carWeight"
              v-model.number="form.carWeight"
              required
            />
          </b-form-group>

          <b-col class="mt-3 text-center">
            <b-button type="submit" variant="primary"> Підтвердити </b-button>
          </b-col>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showOkAlert: false,

      form: {
        id: null,
        carNumber: null,
        driverName: null,
        carWeight: null,
      },
    };
  },

  methods: {
    ...mapActions("vehicles", ["addVehicle"]),
    onSubmit() {
      const weather = this.$store.getters["weather/getCurrentWeather"];
      const payload = {
        id: Date.now(),
        carNumber: this.form.carNumber,
        driverName: this.form.driverName,
        carWeight: this.form.carWeight,
        weather: {
          temperature: weather.temperature,
          weathercode: weather.weathercode,
        },
      };

      this.addVehicle(payload);
      this.showOkAlert = true;
      setTimeout(() => {
        this.showOkAlert = false;
      }, 1500);
    },
  },
};
</script>
<style scoped></style>
