<template>
  <select
    class="app-sidebar-menu-item input"
    :id="id"
    @change="$emit('set-active-thread-id', $event.target.value)"
  >
    <option value="false" selected>select thread from dropdown...</option>
    <option :value="item.title" v-for="item in contents" :key="item">
      {{ item.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SidebarSelect",

  props: {
    contents: Array,
    id: String,
  },

  emits: ["set-active-thread-id"],
};
</script>
