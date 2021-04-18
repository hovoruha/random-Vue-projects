<template>
  <select class="app-sidebar-menu-item input" :id="id">
    <option v-for="item in contents" :key="item" :value="item.title">
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "sidebarSelect",

  props: {
    contents: Array,
    id: String,
  },
};
</script>
