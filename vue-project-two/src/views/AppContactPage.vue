<template>
  <div class="app-contact">
    <base-header>
      <template v-slot:headTitle><h1>Means of getting in contact</h1></template>
      <!-- <h4>so far...</h4> -->
      <template v-slot:avatarSlot>
        <base-avatar :parameters="avatarProps" />
      </template>
    </base-header>
    <base-section>
      <base-container>
        <base-iconed-item
          class="flex-row flex-cc txt-bk"
          v-for="item in getContactCredentials"
          :key="item"
        >
          <template v-slot:icon
            ><span><i :class="item.icon"></i></span
          ></template>
          <h4>{{ item.text }}</h4>
        </base-iconed-item>
        <base-iconed-item class="flex-row flex-cc txt-bk">
          <template v-slot:icon
            ><span><i class="fab fa-github"></i></span
          ></template>
          <a href="https://github.com/hovoruha" target="_blank"
            ><h4>follow me on GitHub</h4></a
          >
        </base-iconed-item>
      </base-container>
      <!-- aici vine ContactForms.vue... -->
      <contact-page-form />
    </base-section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "../components/base components/BaseHeader.vue";
import BaseAvatar from "../components/base components/BaseAvatar.vue";
import BaseSection from "../components/base components/BaseSection.vue";
import BaseContainer from "../components/base components/BaseContainer.vue";
import BaseIconedItem from "../components/base components/BaseIconedItem.vue";
import ContactPageForm from "./AppContactPage components/ContactPageForm.vue";

export default {
  name: "AppContactPage",

  components: {
    BaseHeader,
    BaseAvatar,
    BaseSection,
    BaseContainer,
    BaseIconedItem,
    ContactPageForm,
  },

  data() {
    return {
      avatarProps: {
        src: require("../assets/Contact.jpg"),
        alt: "contact photo...",
      },
    };
  },

  computed: {
    ...mapGetters(["getContactCredentials"]),
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
