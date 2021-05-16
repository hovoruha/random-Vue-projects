<template>
  <div class="app-homepage" id="homepage">
    <base-header>
      <template v-slot:headTitle><h1>Octavian Hovoruha</h1></template>
      <h4>Industrial Engineer & aspiring web-developer</h4>
      <template v-slot:avatarSlot>
        <base-avatar :parameters="avatarProps" />
      </template>
    </base-header>
    <base-section>
      <base-section-item
        v-for="item in getHomepageContents"
        :key="item"
        :itemTitle="item.title"
        :itemSubtitle="item.subtitle"
        :itemContent="item.content"
      />
    </base-section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "../components/base components/BaseHeader";
import BaseAvatar from "../components/base components/BaseAvatar";
import BaseSection from "../components/base components/BaseSection.vue";
import BaseSectionItem from "../components/base components/BaseSectionItem";

export default {
  name: "AppHomepage",

  components: {
    BaseHeader,
    BaseAvatar,
    BaseSection,
    BaseSectionItem,
  },

  props: {},

  data() {
    return {
      avatarProps: {
        src: require("../assets/myAvatar.jpg"),
        alt: "my avatar photo...",
      },
    };
  },

  computed: {
    ...mapGetters(["getHomepageContents"]),
  },

  methods: {},
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

/* .app-homepage .header #myAvatar {
  position: absolute;
  left: calc(100vw / 2 - 77px);
  top: 125px;
} */

.app-homepage .header-title *:first-child {
  text-decoration: underline;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .base-section {
    padding-top: 150px;
    padding-left: 90px;
    padding-right: 90px;
  }
}

@media only screen and (min-width: 1025px) {
  .base-section {
    padding-top: 200px;
    padding-left: 250px;
    padding-right: 250px;
  }
}
</style>
