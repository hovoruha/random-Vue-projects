<template>
  <div class="header">
    <div class="header-title">
      <div myName><slot name="headTitle"></slot></div>
      <slot></slot>
      <div headerAvatar><slot name="avatarSlot"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 200px;
  /* background-color: var(--green1); */
  background-color: rgba(65, 184, 131, 0.8);
}

.header .header-title {
  text-align: right;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
  margin: 50px 20px 0 0;
}

.header .header-title div[myName] {
  font-size: 10px;
}

.header .header-title div[headerAvatar] {
  position: absolute;
  left: calc((100vw / 2) - 75px);
  top: 125px;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .header .header-title {
    margin-right: 40px;
  }

  .header .header-title div[myName] {
    font-size: 14px;
  }

  .header .header-title div[headerAvatar] {
    left: calc(50vw - 85px);
  }
}

@media only screen and (min-width: 768px) {
  .header .header-title div[headerAvatar] {
    left: calc(50vw - 78px);
  }
}

@media only screen and (min-width: 1025px) {
  .header {
    height: 255px;
  }

  .header .header-title {
    margin-right: 60px;
    text-align: left;
    padding-left: 50px;
  }

  .header .header-title div[myName] {
    font-size: 16px;
  }

  .header .header-title div[headerAvatar] {
    /* left: 10vw; */
    left: 100px;
  }
}
</style>
