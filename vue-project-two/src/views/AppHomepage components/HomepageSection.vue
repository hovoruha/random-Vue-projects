<template>
  <section class="app-homepage-section">
    <base-section-item
      v-for="item in getHomepageContents"
      :key="item"
      :itemTitle="item.title"
      :itemSubtitle="item.subtitle"
      :itemContent="item.content"
    />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseSectionItem from "./BaseSectionItem.vue";

export default {
  components: { BaseSectionItem },
  name: "HomepageSection",

  computed: {
    ...mapGetters(["getHomepageContents"]),
  },
};
</script>

<style scoped>
.app-homepage-section {
  width: 100%;
  height: 100%;
  padding: 100px 20px 10px 20px;
}
</style>
