<template>
  <div class="wrapper">
    <app-navbar />
    <app-sidebar />
  </div>
</template>

<script>
import appNavbar from "./components/navbar";
import appSidebar from "./components/sidebar";

export default {
  name: "App",

  components: {
    appNavbar,
    appSidebar,
  },
};
</script>
