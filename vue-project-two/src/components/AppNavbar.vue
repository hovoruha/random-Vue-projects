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
        { destination: "/", text: "Bio", run: this.hideNavbar },
        { destination: "/about", text: "XP", run: this.hideNavbar },
        { destination: "/projects", text: "My work", run: this.hideNavbar },
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
  z-index: 100;
  position: fixed;
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

.app-navbar .app-navbar-item:hover {
  color: var(--green1);
}

.open {
  white-space: nowrap;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
}

.close {
  white-space: nowrap;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .app-navbar {
    position: static;
    height: 60px;
    background-color: var(--green2);
    flex-direction: row;
  }

  .app-navbar .app-navbar-item {
    margin: 0 20px 0 0;
    color: var(--green1);
  }

  .app-navbar .app-navbar-item:hover {
    text-decoration: underline;
  }

  .close {
    transform: translateY(0);
  }
}

@media only screen and (min-width: 1025px) {
  .app-navbar {
    justify-content: flex-end;
    padding-right: 30px;
  }
}
</style>
