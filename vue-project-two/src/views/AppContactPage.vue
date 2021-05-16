<template>
  <div class="app-contact">
    <base-header>
      <template v-slot:headTitle><h1>Means of getting in contact</h1></template>
      <!-- <h4>so far...</h4> -->
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
  name: "AppContactPage",

  components: {
    BaseHeader,
    BaseAvatar,
    BaseSection,
  },

  data() {
    return {
      avatarProps: {
        src: require("../assets/Contact.jpg"),
        alt: "contact photo...",
      },
    };
  },
};
</script>

<style scoped>
.app-contact {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.app-contact .header-title *:first-child {
  text-decoration: underline;
}
</style>
