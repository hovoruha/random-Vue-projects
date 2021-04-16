<template>
  <li class="app-sidebar-menu-item" v-for="item in contents" :key="item">
    <input
      :class="item.class"
      :type="item.type"
      :placeholder="item.placeholder"
      :value="item.value"
    />
  </li>
</template>

<script>
export default {
  name: "sidebarItem",

  props: {
    contents: Array,
  },
};
</script>
