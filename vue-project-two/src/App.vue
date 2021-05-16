<template>
  <div class="app-wrapper" id="appWrapp">
    <app-navbar />
    <div class="container">
      <base-burger-btn class="top-left" @open-menu="openNavbar" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar";
import BaseBurgerBtn from "./components/base components/BaseBurgerBtn";

export default {
  name: "App",
  components: {
    AppNavbar,
    BaseBurgerBtn,
  },

  data() {
    return {
      scrollValue: "",
      scrollValueLeft: "",
    };
  },

  methods: {
    openNavbar() {
      this.$store.commit("displayNavbar");
    },

    testScroll() {
      const elem = document.getElementsByTagName("html")[0];
      const header = document.getElementsByClassName("container")[0];
      const burger = document.getElementsByClassName("burger-btn")[0];

      this.scrollValue = elem.scrollTop;

      if (this.scrollValue > 168) {
        header.classList.add("scrolled");
        burger.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        burger.classList.remove("scrolled");
      }
    },

    // resizeAvatar() {
    //   const elem = document.getElementsByTagName("html")[0];
    //   const avatar = document.getElementsByClassName("avatar-img")[0];

    //   //1007 → echivalentul lui 1025px vw...
    //   if (elem.scrollWidth > 1007) {
    //     avatar.style.width = 250 + "px";
    //     avatar.style.height = 250 + "px";
    //   } else {
    //     avatar.style.width = 150 + "px";
    //     avatar.style.height = 150 + "px";
    //   }
    // },
  },

  mounted() {
    window.addEventListener("scroll", this.testScroll);
    // window.addEventListener("resize", this.resizeAvatar);
    // this.resizeAvatar();
  },

  deactivated() {
    window.addEventListener("scroll", this.testScroll);
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

html {
  width: 100%;
  height: 100%;
  background-color: var(--green2);
}

body {
  width: 100%;
  height: 100%;
  background-color: var(--green2);
  /* background-image: url("assets/webie-devie(2).jpg"); */
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
}

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  position: relative;
}

.app-wrapper .burger-btn {
  font-size: 25px;
  color: var(--bk);
  transition: all 0.3s ease-in-out;
}

.app-wrapper .burger-btn.scrolled {
  color: var(--lightgray);
  transition: all 0.3s ease-in-out;
}

.app-wrapper .container {
  z-index: 51;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
}

.app-wrapper .container.scrolled {
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease-in-out;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .app-wrapper .container {
    display: none;
  }
}

@media only screen and (min-width: 1025px) {
}
</style>
