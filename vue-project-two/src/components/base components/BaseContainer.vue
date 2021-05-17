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
</style>
