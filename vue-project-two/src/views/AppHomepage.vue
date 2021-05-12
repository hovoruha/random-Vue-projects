<template>
  <div class="app-homepage">
    <base-burger-btn class="bk top-left" @open-menu="openNavbar" />
    <h1>This is the Homepage... 🖐</h1>
  </div>
</template>

<script>
import BaseBurgerBtn from "../components/base components/BaseBurgerBtn";

export default {
  name: "AppHomepage",

  components: {
    BaseBurgerBtn,
  },

  props: {},

  methods: {
    openNavbar() {
      this.$store.commit("displayNavbar");
    },
  },
};
</script>

<style scoped>
.app-homepage {
  position: relative;
  width: 100%;
  height: 100%;
  /* height: 100vh; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

h1 {
  margin-top: 60px;
}
</style>
