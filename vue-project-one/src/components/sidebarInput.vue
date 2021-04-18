<template>
  <input
    class="app-sidebar-menu-item"
    v-for="item in contents"
    :key="item"
    :id="item.id"
    :class="item.class"
    :type="item.type"
    :placeholder="item.placeholder"
    :value="item.value"
    @click="item.run"
  />
</template>

<script>
export default {
  name: "sidebarInput",

  props: {
    contents: Array,
  },
};
</script>
