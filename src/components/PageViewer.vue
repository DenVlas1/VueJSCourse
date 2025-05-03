<script >
export default {
  name: "PageViewer",
  props:['page'],
  data(){
    return {  num1: 0,
      num2: 0,
      userAnswer: null,
            answered: false,
      isCorrect: false,
      userText: ''
  }
  },
  created() {
    this.newNumbers();
  },
  methods:{
    newNumbers: function(){
      this.num1 = Math.floor(Math.random() * 11);
      this.num2 = Math.floor(Math.random() * 11);
      this.userAnswer = null;
      this.answered=false;
      this.feedback = '';
      this.isCorrect=false;
    },
    sum: function (){
       return this.num1+this.num2;
    },
    checkAnswer() {
      this.answered = true;
      this.isCorrect = this.userAnswer === this.sum();
    },
  },
  setup(){

  }
}
</script>

<template>
  <b-container>
      <div v-if="page.pageTitle=== 'HomePage'">
        <h1 class="text-center my-3">{{num1}} + {{num2}}</h1>
        <b-row class="justify-content-center mb-4">
          <b-col cols="auto">
            <b-input-group prepend="Числове значення" class="p-2">
              <b-form-input v-model.number="userAnswer" type="number" size="sm" class=""></b-form-input>
            </b-input-group>
            <b-input-group-append class="d-flex justify-content-center my-2">
            <b-button @click="checkAnswer" variant="outline-success" size="sm"  class="mx-2 flex-fill">Перевірити результат</b-button>
            <b-button @click="newNumbers" variant="outline-danger" size="sm" class="mx-2 flex-fill" >Нове число</b-button>
          </b-input-group-append>
            <b-input-group class="mt-auto">
              <b-form-input v-model="userText"></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>
      <h1> {{userText}}</h1>
      <div v-if="answered" class="d-flex justify-content-center align-items-center">
        <h1 v-if="isCorrect">Відповідь вірна</h1>
        <h1 v-else>Відповідь не вірна</h1>
      </div>

         </div>
    <div v-else-if="page.pageTitle==='About'">
      <h1>{{ page.pageTitle }}</h1>
      <p>{{ page.content }}</p>
    </div>
  </b-container>


</template>

<style scoped>

</style>