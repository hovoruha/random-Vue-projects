<template>
  <div class="app-projects">
    <base-header>
      <template v-slot:headTitle><h1>Various projects</h1></template>
      <h4>WebDev, Custom VBA apps & industrial engineering related...</h4>
      <template v-slot:avatarSlot>
        <base-avatar :parameters="avatarProps" />
      </template>
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
        src: require("../assets/Projects.jpg"),
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

.app-projects .header-title *:first-child {
  text-decoration: underline;
}
</style>
