<template>
  <div class="close-btn" :class="btnClass" @click="$emit('close-parent')">
    <i class="fas fa-times"></i>
  </div>
</template>

<script>
export default {
  name: "BaseCloseBtn",

  props: ["btnClass"], //optional...

  emits: ["close-parent"],

  methods: {
    //only use if needed to replace the .open class with .close... otherwhise only use the emitted event.
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

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .close-btn {
    display: none;
  }
}

@media only screen and (min-width: 1025px) {
}
</style>
