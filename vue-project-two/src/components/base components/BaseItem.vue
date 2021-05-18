<template>
  <div class="base-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseItem",
};
</script>

<style scoped>
.base-item {
  width: 100%;
  margin: 10px 0;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}

.base-item.flex-row {
  display: flex;
  flex-direction: row;
}

.base-item.flex-col {
  display: flex;
  flex-direction: column;
}

.wrap {
  flex-wrap: wrap;
}

.nowrap {
  flex-wrap: nowrap;
}

.flex-cc {
  align-items: center;
  justify-content: center;
}
.flex-cs {
  align-items: center;
  justify-content: flex-start;
}
.flex-ce {
  align-items: center;
  justify-content: flex-end;
}

.flex-sc {
  align-items: flex-start;
  justify-content: center;
}
.flex-ec {
  align-items: flex-end;
  justify-content: center;
}
.flex-ss {
  align-items: flex-start;
  justify-content: flex-start;
}
.flex-se {
  align-items: flex-start;
  justify-content: flex-end;
}
.flex-es {
  align-items: flex-end;
  justify-content: flex-start;
}
.flex-ee {
  align-items: flex-end;
  justify-content: flex-end;
}
.flex-csb {
  align-items: center;
  justify-content: space-between;
}
.flex-csa {
  align-items: center;
  justify-content: space-around;
}

.txt-sdw {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

.base-item.txt-bk {
  color: var(--bk);
}

.base-item.txt-wh {
  color: var(--wh);
}

.base-item.txt-grn1 {
  color: var(--green1);
}

.base-item.txt-grn2 {
  color: var(--green2);
}

.base-item.txt-gry {
  color: var(--gray);
}

.base-item.txt-lgry {
  color: var(--lightgray);
}

.base-item.txt-acc1 {
  color: var(--acc1);
}
</style>
