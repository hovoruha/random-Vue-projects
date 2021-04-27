<template>
  <div class="wrapper">
    <the-navbar />
    <the-sidebar />
    <the-showcase />
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
import TheSidebar from "./components/TheSidebar";
import TheShowcase from "./components/TheShowcase";
import TheFooter from "./components/TheFooter";

export default {
  name: "App",

  components: {
    TheNavbar,
    TheSidebar,
    TheShowcase,
    TheFooter,
  },
};
</script>
