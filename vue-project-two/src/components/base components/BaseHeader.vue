<template>
  <div class="header">
    <div class="header-title">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style scoped>
.header {
  /* position: relative; */
  width: 100%;
  height: 200px;
  background-color: var(--green1);
}

.header-title {
  text-align: right;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  margin: 50px 10px 0 0;
}
</style>
