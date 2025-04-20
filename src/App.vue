<!-- src/App.vue -->
<template>
  <b-container  >
    <b-row class="my-3  justify-content-md-center"  >
      <b-col cols="auto"  >
        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>
      </b-col>
      <b-col cols="auto"  >
        <b-form-group label="Маленькая"
                      label-for="input-1"
                      label-cols-sm="4"
                      class=" d-inline-flex">
          <b-form-input  id="input-1"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>