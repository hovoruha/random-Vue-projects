<template>
  <div class="app-wrapper" id="appWrapp">
    <app-navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar";

export default {
  name: "App",
  components: {
    AppNavbar,
  },

  data() {
    return {
      scrollValue: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style>
/* main colors... */
:root {
  --bk: #000;
  --wh: #fff;
  --gray: gray;
  --lightgray: lightgray;
  --green1: #41b883;
  --green2: #34495e;
}
/* main resets... */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  line-height: 1.6rem;
  list-style: none;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;
}

a,
a:active,
a:visited {
  color: inherit;
}

body {
  width: 100%;
  height: 100%;
  background-color: var(--green2);
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
}

/* utility classes... */

/* _____________________ */
</style>
