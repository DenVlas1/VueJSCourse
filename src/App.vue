<template>
  <b-container>
    <b-nav class="mt-2">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </b-nav>
    <b-card class="mt-5 text-center">
      <router-view />
    </b-card>
  </b-container>
</template>

<script>
export default {};
</script>
