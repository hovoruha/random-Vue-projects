<template>
  <span class="avatar">
    <img
      class="avatar-img"
      :src="parameters.src"
      :alt="parameters.alt"
      draggable="false"
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
  z-index: 50;
  display: inline-block;
  line-height: 0;
  border-radius: 50%;
  border: 2px solid var(--green1);
  overflow: hidden;
}

.avatar .avatar-img {
  width: 150px;
  height: 150px;
}

/* media queries_________________ */
@media only screen and (min-width: 1025px) {
  .avatar .avatar-img {
    width: 250px;
    height: 250px;
  }
}
</style>
