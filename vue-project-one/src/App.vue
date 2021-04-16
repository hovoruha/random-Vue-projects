<template>
  <div class="wrapper">
    <app-navbar />
    <app-sidebar />
    <app-showcase />
    <app-footer />
  </div>
</template>

<script>
import appNavbar from "./components/navbar";
import appSidebar from "./components/sidebar";
import appShowcase from "./components/showcase";
import appFooter from "./components/appfooter";

export default {
  name: "App",

  components: {
    appNavbar,
    appSidebar,
    appShowcase,
    appFooter,
  },
};
</script>
