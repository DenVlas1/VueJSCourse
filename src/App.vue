<!-- src/App.vue -->
<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="12" md="6">
        <b-alert variant="success" v-model="showOkAlert" dismissible fade>Дані збережені</b-alert>
        <b-alert variant="danger"  v-model="showCancelAlert" dismissible fade>Дані не прийняті</b-alert>

        <b-form @submit.prevent="onSubmit">
          <b-form-group label="Номер авто" label-for="carNumber">
            <b-form-input id="carNumber" v-model.number="form.carNumber" required />
          </b-form-group>

          <b-form-group label="Ім'я водія" label-for="driver-Name">
            <b-form-input id="driver-Name" v-model="form.driverName" required />
          </b-form-group>

          <b-form-group label="Вага авто" label-for="carWeight">
            <b-form-input id="carWeight" v-model.number="form.carWeight" required />
          </b-form-group>

          <!-- убрали <b-row>, оставили просто form-group/div -->
          <b-col class="mt-3 text-center">
            <b-button type="submit" variant="primary" block>
              Підтвердити
            </b-button>
          </b-col>

        </b-form>

        <modal-window
            :open-modal.sync="openModal"
            :car-number="form.carNumber"
            :driver-name="form.driverName"
            :car-weight="form.carWeight"
            @confirm="onConfirm"
            @cancel="onCancel"
        />

        <b-card
            v-if="resultData"
            bg-variant="primary"
            text-variant="white"
            class="text-center mt-4"
        >
          <h5>Ім'я водія: {{ resultData.driverName }}</h5>
          <h5>Номер авто: {{ resultData.carNumber }}</h5>
          <h5>Вага авто: {{ resultData.carWeight }}</h5>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import modalWindow from "@/components/ModalWindow.vue";

export default {
  components: {modalWindow},
data(){
  return{
    showOkAlert:false,
showCancelAlert:false,
    form:{
    carNumber:null,
    driverName:null,
    carWeight:null
  },
    openModal:false,
    resultData:null
}
},
methods:{
    onSubmit(){
      this.openModal=true;
      this.showOkAlert = false;
      this.showCancelAlert = false;

    },
    onConfirm(payload){
      this.showOkAlert=true;
      this.showCancelAlert=false;
      this.resultData={
        carNumber:payload.carNumber,
        driverName:payload.driverName,
        carWeight:payload.carWeight,
      }
      this.form.driverName=null;
      this.form.carNumber=null;
      this.form.carWeight=null;
    },
  onCancel(){
      this.showOkAlert=false;
     this.showCancelAlert=true;

  }
}
};
</script>
