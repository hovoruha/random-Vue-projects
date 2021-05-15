<template>
  <select
    class="app-sidebar-menu-item select"
    :id="id"
    @change="$emit('set-active-thread-id', $event.target.value)"
    @blur="removeAlarm($event.target)"
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

  methods: {
    removeAlarm(e) {
      // console.log("rulez la BLUR");
      // console.log(e.value);
      if (
        e.classList.contains("select-danger") &&
        !(e.value == "select thread from dropdown...")
      ) {
        e.classList.remove("select-danger");
      }
    },
  },
};
</script>
