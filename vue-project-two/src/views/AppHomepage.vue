<template>
  <div class="app-homepage" id="homepage">
    <base-header>
      <h3>Octavian Hovoruha</h3>
      <h4>Industrial Engineer & aspiring web-developer</h4>
      <base-avatar :parameters="avatarProps" />
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
        id: "myAvatar",
        src: require("../assets/myAvatar.jpg"),
        width: 150,
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

.app-homepage .header #myAvatar {
  position: absolute;
  left: calc(100vw / 2 - 77px);
  top: 125px;
}

.app-homepage .header-title *:first-child {
  text-decoration: underline;
  /* text-transform: uppercase; */
}
</style>
