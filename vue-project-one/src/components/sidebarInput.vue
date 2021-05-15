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
    @blur="cancelAlert($event.target)"
  />
</template>

<script>
export default {
  name: "SidebarInput",

  props: {
    contents: Array,
  },

  methods: {
    cancelAlert(e) {
      // console.log("rulez la event BLUR");
      if (e.classList.contains("input-danger") && e.value != "") {
        e.classList.remove("input-danger");
      }
    },
  },
};
</script>
