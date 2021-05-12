<template>
  <div class="app-navbar" :class="getNavbarState ? 'open' : 'close'">
    <base-close-btn class="wh top-right" @close-parent="hideNavbar" />
    <li
      v-for="link in links"
      :key="link"
      class="app-navbar-item"
      @click="link.run"
    >
      <router-link :to="link.destination">{{ link.text }}</router-link>
    </li>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseCloseBtn from "./base components/BaseCloseBtn.vue";

export default {
  name: "AppNavbar",

  components: {
    BaseCloseBtn,
  },

  data() {
    return {
      links: [
        { destination: "/", text: "Home", run: this.hideNavbar },
        { destination: "/about", text: "About", run: this.hideNavbar },
        { destination: "/contact", text: "Contact", run: this.hideNavbar },
      ],
    };
  },

  computed: {
    ...mapGetters(["getNavbarState"]),
  },

  methods: {
    hideNavbar() {
      this.$store.commit("hideNavbar");
    },
  },
};
</script>

<style scoped>
.app-navbar {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh / 2);
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

.app-navbar .app-navbar-item {
  color: white;
  margin-bottom: 30px;
}

.open {
  /* display: flex; */
  white-space: nowrap;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}
.close {
  /* display: none; */
  white-space: nowrap;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}
</style>
