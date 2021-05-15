<template>
  <div class="app-showcase">
    <showcase-item
      :contents="this.currentState"
      :date="this.currentDate"
      @remove-thread="this.removeThread"
      @complete-thread="this.completeThread"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShowcaseItem from "./ShowcaseItem";

export default {
  name: "TheShowcase",

  components: {
    ShowcaseItem,
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters(["currentState", "currentDate"]),
  },

  methods: {
    removeThread(i) {
      // console.log(i);
      this.$store.commit("removeThread", i);
      // console.log(this.currentState);
    },

    completeThread(i) {
      // console.log(
      //   "index: " + i + " " + this.$store.state.allThreads[i].complete
      // );
      this.$store.state.allThreads[i].complete = true;
      // console.log(
      //   "index: " + i + " " + this.$store.state.allThreads[i].complete
      // );
    },
  },
};
</script>
