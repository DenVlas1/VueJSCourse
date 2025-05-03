<template>
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-table
          striped
          hover
          :items="items"
          :fields="fields"
          label-sort-asc=""
          label-sort-desc=""
          label-sort-clear=""
        ></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped></style>
<script setup>
import { ref } from "vue";

const fields = ref([
  { key: "first_name", label: "Ім'я", sortable: true },
  { key: "last_name", label: "Прізвище", sortable: true },
  { key: "age", label: "Рік", sortable: true },
]);
const items = ref([
  {
    age: 42,
    first_name: "Людмила",
    last_name: "Василівна",
    _rowVariant: "danger",
  },
  {
    age: 21,
    first_name: "Григорій",
    last_name: "Стрикоза",
    _cellVariants: {
      age: "success",
      first_name: "info",
      last_name: "light",
    },
  },
  {
    age: 89,
    first_name: "Олег",
    last_name: "Руденко",
    _cellVariants: {
      age: "warning",
      first_name: "success",
      last_name: "dark",
    },
  },
  {
    age: 38,
    first_name: "Богдан",
    last_name: "Хмельницький",
    _cellVariants: {
      age: "primary",
      first_name: "info",
      last_name: "warning",
    },
  },
]);
</script>
