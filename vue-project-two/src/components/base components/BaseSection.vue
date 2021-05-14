<template>
  <section class="base-section">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "BaseSection",
};
</script>

<style scoped>
.base-section {
  width: 100%;
  height: 100%;
  padding: 100px 20px 10px 20px;
}
</style>
