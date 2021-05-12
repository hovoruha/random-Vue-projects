<template>
  <div
    class="close-btn"
    :class="btnClass"
    @click="$emit('close-parent'), closeParent($event)"
  >
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
export default {
  name: "BaseCloseBtn",

  props: ["btnClass"], //optional...

  emits: ["close-parent"],

  methods: {
    closeParent(e) {
      const parent = e.target.parentElement.parentElement;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
        parent.classList.add("close");
      }
    },
  },
};
</script>

<style scoped>
.close-btn {
  color: var(--bk);
}
.close-btn:hover {
  cursor: pointer;
  color: var(--gray);
}

.close-btn.wh {
  color: var(--wh);
}
.close-btn.wh:hover {
  cursor: pointer;
  color: var(--gray);
}

.close-btn.top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
.close-btn.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
