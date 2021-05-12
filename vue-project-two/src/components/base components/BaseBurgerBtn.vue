<template>
  <div
    class="burger-btn"
    :class="btnClass"
    @click="$emit('open-menu'), openMenu($event)"
  >
    <i class="fas fa-bars"></i>
  </div>
</template>

<script>
export default {
  name: "BaseBurgerBtn",

  props: ["btnClass"], //optional...

  emits: ["open-menu"],

  methods: {
    openMenu(e) {
      const parent = e.target.parentElement.parentElement;
      const menu =
        parent.previousElementSibling !== null
          ? parent.previousElementSibling
          : parent.nextElementSibling;
      //   console.log(menu);

      if (menu.classList.contains("close")) {
        menu.classList.remove("close");
        menu.classList.add("open");
      }
    },
  },
};
</script>

<style scoped>
.burger-btn {
  color: var(--bk);
}
.burger-btn:hover {
  cursor: pointer;
  color: var(--gray);
}

.burger-btn.wh {
  color: var(--wh);
}
.burger-btn.wh:hover {
  cursor: pointer;
  color: var(--gray);
}

.burger-btn.top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
.burger-btn.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
