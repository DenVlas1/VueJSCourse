<template>
  <div>
    <img v-bind:src="imageSrc" alt="Example image">
    <!-- Коротка форма -->
    <img :src="imageSrc" alt="Example image">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: 'https://www.w3schools.com/html/img_girl.jpg'
    }
  }
}
</script>