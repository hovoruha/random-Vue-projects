<template>
  <div class="app-showcase">
    <showcase-item :contents="currentState" :date="currentDate" />
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
