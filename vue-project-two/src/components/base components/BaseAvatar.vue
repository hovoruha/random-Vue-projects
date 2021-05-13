<template>
  <span class="avatar" :id="parameters.id">
    <img
      :src="parameters.src"
      :width="parameters.width"
      :height="parameters.width"
      :alt="parameters.alt"
    />
  </span>
</template>

<script>
export default {
  name: "BaseAvatar",

  props: {
    parameters: Object,
  },
};
</script>

<style scoped>
.avatar {
  display: inline-block;
  line-height: 0;
  border-radius: 50%;
  border: 2px solid var(--green1);
  overflow: hidden;
}
</style>
