<!-- src/App.vue -->
<template>
  <b-container class="text-center my-5">
    <user-card name="Вадим" :age="22" :is-active="true"></user-card>
    <user-card name="Андрій" :age="32" :is-active="true"></user-card>
    <user-card name="Никита" :age="50" :is-active="false"></user-card>
    <user-card></user-card>

  </b-container>
</template>

<script>
import UserCard from "@/components/UserCard.vue";

export default {
  components: { UserCard },
};
</script>
