<template>
  <span class="app-sidebar-tabs-item" :class="content.isActive ? 'open' : ''">
    {{ content.text }}</span
  >
</template>

<script>
export default {
  name: "sidebarTab",

  props: {
    content: Object,
  },
};
</script>
