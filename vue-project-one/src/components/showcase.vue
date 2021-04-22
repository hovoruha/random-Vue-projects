<template>
  <div class="app-showcase">
    <showcase-item
      v-for="(thread, index) in this.currentState"
      :key="index"
      :contents="currentState"
      :date="currentDate"
      @remove="this.currentState.splice(index, 1)"
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
};
</script>
