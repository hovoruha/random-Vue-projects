<template>
  <li class="app-navbar-menu-item" v-for="item in contents" :key="item">
    <a :href="item.href" class="app-navbar-menu-item_link">
      <span class="app-navbar-menu-item_icon" v-html="item.icon"></span
      >{{ item.text }}
    </a>
  </li>
</template>

<script>
export default {
  name: "NavbarItem",

  props: {
    contents: Array,
  },
};
</script>
