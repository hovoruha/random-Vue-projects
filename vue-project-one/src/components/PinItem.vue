<template>
  <div
    class="pin-item"
    :class="this.isActive ? 'open' : ''"
    @click="
      $emit('activate-pin');
      togglePin();
    "
  >
    <i class="fas fa-thumbtack"></i>
  </div>
</template>

<script>
export default {
  name: "PinItem",

  emits: ["activate-pin"],

  data() {
    return {
      isActive: false,
    };
  },

  methods: {
    togglePin() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
