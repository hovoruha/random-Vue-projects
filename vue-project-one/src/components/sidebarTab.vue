<template>
  <span
    v-for="item in content"
    class="app-sidebar-tabs-item"
    :class="item.isActive ? 'open' : ''"
    :key="item"
    @click="$emit('clickAction', $event.target)"
  >
    {{ item.text }}</span
  >
</template>

<script>
export default {
  name: "sidebarTab",

  props: {
    content: Array, //initial setat Object...
  },

  emits: ["clickAction"],

  methods: {},
};
</script>
