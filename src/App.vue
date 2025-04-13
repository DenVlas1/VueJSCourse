<!-- src/App.vue -->
<template>
  <div id="app">
    <VBindDirective />
  </div>
</template>

<script>
import VBindDirective from './components/VBindDirective.vue'

export default {
  name: 'App',
  components: {
    VBindDirective
  }
}
</script>
