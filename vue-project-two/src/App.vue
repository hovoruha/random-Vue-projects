<template>
  <div class="app-wrapper">
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
    return {};
  },
};
</script>

<style>
/* main colors... */
:root {
  --bk: #000;
  --wh: #fff;
  --gray: gray;
  --lightgray: lightgray;
  --green: #72ad72;
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

a:active,
a:visited {
  color: inherit;
}

body {
  width: 100%;
  height: 100%;
}

.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

/* utility classes... */

/* _____________________ */
</style>
