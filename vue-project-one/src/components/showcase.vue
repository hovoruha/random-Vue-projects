<template>
  <div class="app-showcase">
    <showcase-item
      :contents="this.currentState"
      :date="this.currentDate"
      @remove-thread="this.removeThread"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import showcaseItem from "./showcaseItem";

export default {
  name: "showcase",

  components: {
    showcaseItem,
  },

  computed: {
    ...mapGetters(["currentState", "currentDate"]),
  },

  methods: {
    removeThread(i) {
      console.log(i);
      this.$store.commit("removeThread", i);
      console.log(this.currentState);
    },
  },
};
</script>
