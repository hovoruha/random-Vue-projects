<template>
  <div class="base-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BaseContainer,",
};
</script>

<style scoped>
.base-container {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.base-container.right {
  text-align: right;
}

.base-container.center {
  text-align: right;
}

.base-container.flex-row {
  display: flex;
  flex-direction: row;
}

.base-container.flex-col {
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

.bg-bk {
  background-color: var(--bk);
}
.bg-wh {
  background-color: rgba(255, 255, 255, 0.1);
}
.bg-gry {
  background-color: var(--gray);
}
.bg-lgry {
  background-color: var(--lightgray);
}
.bg-grn1 {
  background-color: var(--green1);
}
.bg-grn2 {
  background-color: var(--green2);
}
.bg-acc1 {
  background-color: var(--acc1);
}

/* media queries... */
@media only screen and (min-width: 737px) {
}

@media only screen and (min-width: 1025px) {
  .base-container {
    padding: 40px 60px 10px;
  }
}
</style>
