<script>
export default {
  props: {
    carNumber: Number,
    driverName: String,
    carWeight: Number,
    openModal: Boolean,
  },
  computed: {
    modalVisible: {
      get() {
        return this.openModal;
      },
      set(val) {
        this.$emit("update:openModal", val);
      },
    },
  },
  methods: {
    emitConfirm() {
      const result = {
        carNumber: this.carNumber,
        driverName: this.driverName,
        carWeight: this.carWeight,
      };
      this.$emit("confirm", result);
    },
    emitCancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<template>
  <b-container>
    <b-modal
      @ok="emitConfirm"
      @cancel="emitCancel"
      v-model="modalVisible"
      title="Підтвердження"
    >
      <h1>
        Прийняти зміни для машини {{ carNumber }} з водієм {{ driverName }} та
        вагою {{ carWeight }}?
      </h1>
    </b-modal>
  </b-container>
</template>

<style scoped></style>
