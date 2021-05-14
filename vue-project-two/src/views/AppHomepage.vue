<template>
  <div class="app-homepage" id="homepage">
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

      scrollValue: "",
    };
  },

  methods: {
    openNavbar() {
      this.$store.commit("displayNavbar");
    },

    testScroll() {
      // console.log("rulez la scroll");
      const elem = document.getElementsByTagName("html")[0];
      // const par = document.getElementById('appWrapp');
      // const hom = document.getElementById("homepage");
      const header = document.getElementsByClassName("app-homepage-header")[0];
      this.scrollValue = elem.scrollTop;
      console.log(this.scrollValue);
      if (this.scrollValue > 126) {
        header.classList.add("minimized");
        // console.log("goz");

        // this.scrollValue = 127;
      } else {
        header.classList.remove("minimized");
        // console.log("moz");
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.testScroll);
  },

  deactivated() {
    window.addEventListener("scroll", this.testScroll);
  },
};
</script>

<style scoped>
.app-homepage {
  position: relative;
  width: 100%;
  height: 100%;
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

.app-homepage-header.minimized {
  position: sticky;
  z-index: -1;
  top: 0;
  /* left: 0; */
  height: 50px;
}

.app-homepage-header.minimized #myAvatar {
  display: none;
}
</style>
