<template>
  <div class="app-homepage">
    <base-burger-btn class="top-left" @open-menu="openNavbar" />
    <div class="app-homepage-header">
      <div class="app-homepage-header-title">
        <h3>Octavian Hovoruha</h3>
        <h4>Industrial Engineer & aspiring web-developer</h4>
      </div>
      <base-avatar :parameters="avatarProps" />
    </div>
    <homepage-section />
  </div>
</template>

<script>
import BaseBurgerBtn from "../components/base components/BaseBurgerBtn";
import BaseAvatar from "../components/base components/BaseAvatar";
import HomepageSection from "./AppHomepage components/HomepageSection.vue";

export default {
  name: "AppHomepage",

  components: {
    BaseBurgerBtn,
    BaseAvatar,
    HomepageSection,
  },

  props: {},

  data() {
    return {
      avatarProps: {
        id: "myAvatar",
        src: require("../assets/myAvatar.jpg"),
        width: 150,
        alt: "my avatar photo...",
      },
    };
  },

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

.app-homepage .app-homepage-header {
  width: 100%;
  height: 200px;
  background-color: var(--green1);
}

.app-homepage .burger-btn {
  font-size: 25px;
  color: var(--green2);
}

.app-homepage-header #myAvatar {
  position: absolute;
  left: calc(100vw / 2 - 77px);
  top: 125px;
}

.app-homepage .app-homepage-header .app-homepage-header-title {
  text-align: right;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  margin: 50px 10px 0 0;
}

.app-homepage .app-homepage-header .app-homepage-header-title h3 {
  text-decoration: underline;
  /* text-transform: uppercase; */
}
</style>
