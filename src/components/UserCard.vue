<script>
export default {
  props: {
    name: { type: String, default: null },
    age: { type: Number, default: null },
    isActive: { type: Boolean, default: null },
  },
};
</script>

<template>
  <b-card class="mb-4">
    <div v-if="name !== null && age !== null && isActive !== null">
      <h1 class="mb-2">{{ name }}</h1>
      <h3 class="mb-1">Age: {{ age }}</h3>
      <h3>
        {{ isActive ? "Aktywny użytkownik" : "Nieaktywny użytkownik" }}
      </h3>
    </div>
    <div v-else>
      <h1>Missing info</h1>
    </div>
  </b-card>
</template>

<style scoped></style>
