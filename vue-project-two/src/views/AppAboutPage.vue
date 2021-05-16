<template>
  <div class="app-about">
    <base-header>
      <template v-slot:headTitle><h1>The XP tree</h1></template>
      <h4>so far...</h4>
      <template v-slot:avatarSlot>
        <base-avatar :parameters="avatarProps" />
      </template>
    </base-header>
    <base-section>
      <timeline>
        <timeline-item
          v-for="item in getAboutPageContents"
          :key="item"
          :class="[item.position]"
        >
          <template v-slot:title
            ><h4>{{ item.title }}</h4></template
          >
          <template v-slot:subtitle
            ><h5>{{ item.subtitle }}</h5></template
          >
          <template v-slot:content
            ><p>{{ item.content }}</p></template
          >
        </timeline-item>
      </timeline>
    </base-section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseHeader from "../components/base components/BaseHeader.vue";
import BaseAvatar from "../components/base components/BaseAvatar.vue";
import BaseSection from "../components/base components/BaseSection.vue";
import Timeline from "../components/Timeline.vue";
import TimelineItem from "../components/TimelineItem.vue";

export default {
  name: "AppAboutPage",

  components: {
    BaseHeader,
    BaseAvatar,
    BaseSection,
    Timeline,
    TimelineItem,
  },

  data() {
    return {
      avatarProps: {
        src: require("../assets/XP-tree.jpg"),
        alt: "xp tree photo...",
      },
    };
  },

  computed: {
    ...mapGetters(["getAboutPageContents"]),
  },
};
</script>

<style scoped>
.app-about {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.app-about .header-title *:first-child {
  text-decoration: underline;
}

p {
  line-height: 1rem;
}
</style>
