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
  background-color: var(--green2);
  padding: 130px 20px 10px 20px;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .base-section {
    padding: 130px 60px 10px;
  }
}

@media only screen and (min-width: 1025px) {
  .base-section {
    padding: 130px 200px 10px;
  }
}
</style>
