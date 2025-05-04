<!-- src/App.vue -->
<template>
  <b-container>
    <b-navbar type="dark" variant="dark">

        <b-navbar-brand>Завдання №3</b-navbar-brand>
        <b-navbar-nav class="me-auto">
          <!--          виведення усіх значень зі списку сторінок-->
          <b-nav-item
            v-for="(page, index) in pages"
            :key="index"
            :active="activePage === index"
            @click.prevent="activePage = index"
          >
            {{ page.link.text }}
          </b-nav-item>
        </b-navbar-nav>
    </b-navbar>
      <page-viewer :page="pages[activePage]"> </page-viewer>
  </b-container>


</template>

<script>
import PageViewer from "@/components/PageViewer.vue";
export default {
  components: { PageViewer },
  data() {
    return {
      activePage: 0,
      theme: "dark",
      pages: [
        {
          link: { text: "Home" },
          pageTitle: "HomePage",
          content: "test1",
        },
        {
          link: { text: "About" },
          pageTitle: "About",
          content: "test2",
        },
      ],
    };
  },
};
</script>
