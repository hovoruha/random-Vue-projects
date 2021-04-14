<template>
  <div class="wrapper">
    <app-navbar />
  </div>
</template>

<script>
import appNavbar from "./components/navbar";

export default {
  name: "App",

  components: {
    appNavbar,
  },
};
</script>
