<template>
  <div class="app-sidebar">
    <form class="app-sidebar-menu">
      <sidebar-item :contents="this.sidebarInputs" />
    </form>
  </div>
</template>

<script>
import sidebarItem from "./sidebarItem";

export default {
  name: "sideBar",

  components: {
    sidebarItem,
  },

  data() {
    return {
      sidebarInputs: [
        {
          type: "text",
          class: "input",
          placeholder: "enter task subject here...",
        },
        {
          type: "text",
          class: "input",
          placeholder: "enter task content here...",
        },
        { type: "submit", class: "btn-primary", value: "create task" },
      ],
    };
  },
};
</script>
