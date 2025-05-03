<!-- src/App.vue -->
<template>
<div>
  <b-navbar :type="dark" :variant="dark">
    <b-container>
      <b-navbar-brand>Завдання №3</b-navbar-brand>
      <b-navbar-nav class="me-auto">
        <b-nav-item
          v-for="(page, index) in pages"
          :key="index"
          :active="activePage === index"
          @click.prevent="activePage = index">
          {{ page.link.text }} </b-nav-item>
           </b-navbar-nav>
      <b-button class="btn" @click="ChangeTheme">Змінити колір</b-button>
    </b-container>
  </b-navbar>
  <page-viewer
      :page="pages[activePage]">
  </page-viewer>
</div>
</template>

<script>
import PageViewer from '@/components/PageViewer.vue'
export default {
  components: {PageViewer},
  data() {
    return {
      activePage: 0,
      theme: 'dark',
      pages: [
        {
          link: { text: "Home", url: "index.html" },
          pageTitle: "HomePage",
          content: "test1",
        },
        {
          link: { text: "About", url: "about.html" },
          pageTitle: "About",
          content: "test2",
        },
        {
          link: { text: "Contact", url: "contact.html" },
          pageTitle: "Contact",
          content: "test3",
        },
      ],
    };
  },

};
</script>
