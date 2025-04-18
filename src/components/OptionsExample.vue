<template>
  <div>
    <h1>{{ reversedMessage }}</h1>
    <button @click="reverseMessage">Перевернути повідомлення</button>
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  data() {
    return {
      message: "Привіт, Vue!",
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
  },
  watch: {
    message(newValue, oldValue) {
      console.log(`Повідомлення змінилось з "${oldValue}" на "${newValue}"`);
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
