<template>
  <div class="app-projects">
    <base-header>
      <h3>Various projects</h3>
      <h4>WebDev, Custom VBA apps & industrial engineering related...</h4>
      <base-avatar :parameters="avatarProps" />
    </base-header>
    <base-section></base-section>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import BaseHeader from "../components/base components/BaseHeader.vue";
import BaseAvatar from "../components/base components/BaseAvatar";
import BaseSection from "../components/base components/BaseSection.vue";

export default {
  name: "AppProjectsPage",

  components: {
    BaseHeader,
    BaseAvatar,
    BaseSection,
  },

  data() {
    return {
      avatarProps: {
        id: "xpTree",
        src: require("../assets/Projects.jpg"),
        width: 150,
        alt: "xp tree photo...",
      },
    };
  },
};
</script>

<style scoped>
.app-projects {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.app-projects .header #xpTree {
  position: absolute;
  left: calc(100vw / 2 - 77px);
  top: 125px;
}

.app-projects .header-title *:first-child {
  text-decoration: underline;
  /* text-transform: uppercase; */
}
</style>
