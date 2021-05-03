<template>
  <div class="container-row" v-for="item in contents" :key="item">
    <div class="container-row-header">
      <span>{{ item.author }}</span>
      <span>{{ item.date }}</span>
    </div>
    <div class="container-row-body">{{ item.comment }}</div>
  </div>
</template>

<script>
export default {
  name: "ChatSectionComment",

  props: {
    contents: Array,
  },
};
</script>

<style scoped>
.container-row-header span:first-child {
  font-weight: bold;
}
</style>
