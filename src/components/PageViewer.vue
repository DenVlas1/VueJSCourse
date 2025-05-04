<script>
export default {
  name: "PageViewer",
  props: ["page"],
  data() {
    return {
      num1: 0,
      num2: 0,
      userAnswer: null,
      answered: false,
      isCorrect: false,
      userText: "",
      items: ["One", "Two", "Three", "Four"],
    };
  },
  created() {
    this.newNumbers();
  },
  methods: {
    newNumbers: function () {
      this.num1 = Math.floor(Math.random() * 11);
      this.num2 = Math.floor(Math.random() * 11);
      this.userAnswer = null;
      this.answered = false;
      this.feedback = "";
      this.isCorrect = false;
    },
    sum: function () {
      return this.num1 + this.num2;
    },
    checkAnswer() {
      this.answered = true;
      this.isCorrect = this.userAnswer === this.sum();
    },
  },
};
</script>

<template>
  <b-container>
    <!--перевiрка за допомогою v-if чи є сторінка HomePage-->
    <div v-if="page.pageTitle === 'HomePage'">
      v-for:
      <!--      виведення кожного об'єкту зі списку за допомогою v-for-->
      <div v-for="(item, index) in items" :key="index">{{ item }}</div>
      <h1 class="text-center my-3">{{ num1 }} + {{ num2 }}</h1>
      <b-row class="justify-content-center mb-4">
        <b-col cols="auto">
          <b-input-group prepend="Числове значення" class="p-2">
            <!--            використання v-model для оновлення числового значення яке вводить користувач-->
            <b-form-input
              v-model.number="userAnswer"
              type="number"
              size="sm"
              class=""
            ></b-form-input>
          </b-input-group>
          <b-input-group-append class="d-flex justify-content-center my-2">
            <!--дві кнопки перша - перевірити чи число правильне введене друга - оновити число -->
            <b-button
              @click="checkAnswer"
              variant="outline-success"
              size="sm"
              class="mx-2 flex-fill"
              >Перевірити результат</b-button
            >
            <b-button
              @click="newNumbers"
              variant="outline-danger"
              size="sm"
              class="mx-2 flex-fill"
              >Нове число</b-button
            >
          </b-input-group-append>
          <b-input-group class="mt-auto">
            <!--другий об'єкт v-model як для прикладу роботи -->
            <b-form-input v-model="userText"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <h1>{{ userText }}</h1>
      <!--      перевірка за допомогою v-if чи натиснув користувач кнопку, а далі перевірка чи відповідь правильна -->
      <div
        v-if="answered"
        class="d-flex justify-content-center align-items-center"
      >
        <h1 v-if="isCorrect">Відповідь вірна</h1>
        <h1 v-else>Відповідь не вірна</h1>
      </div>
    </div>
    <div v-else-if="page.pageTitle === 'About'">
      <h1>{{ page.pageTitle }}</h1>
      <p>{{ page.content }}</p>
    </div>
  </b-container>
</template>

<style scoped></style>
