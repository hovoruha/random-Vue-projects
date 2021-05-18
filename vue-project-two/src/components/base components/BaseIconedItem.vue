<template>
  <div class="base-iconedItem">
    <div icon><slot name="icon"></slot></div>
    <div text><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "BaseIconedItem",
};
</script>

<style scoped>
.base-iconedItem {
  width: 100%;
  margin: 10px 0;
  font-size: 16px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
}

.base-iconedItem div[icon] {
  font-size: 20px;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}

.base-iconedItem.flex-row {
  display: flex;
  flex-direction: row;
}

.base-iconedItem.flex-row div[icon] {
  margin-right: 10px;
}

.base-iconedItem.flex-col {
  display: flex;
  flex-direction: column;
}

.base-iconedItem.flex-col div[icon] {
  margin-bottom: 10px;
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

.base-iconedItem.txt-bk {
  color: var(--bk);
}

.base-iconedItem.txt-wh {
  color: var(--wh);
}

.base-iconedItem.txt-grn1 {
  color: var(--green1);
}

.base-iconedItem.txt-grn2 {
  color: var(--green2);
}

.base-iconedItem.txt-gry {
  color: var(--gray);
}

.base-iconedItem.txt-lgry {
  color: var(--lightgray);
}

.base-iconedItem.txt-acc1 {
  color: var(--acc1);
}

/* media queries... */
@media only screen and (min-width: 737px) {
  .base-iconedItem {
    margin: 25px 0;
    font-size: 20px;
  }

  .base-iconedItem div[icon] {
    font-size: 25px;
  }
}

@media only screen and (min-width: 1025px) {
  .base-iconedItem {
    margin: 25px 0;
    font-size: 20px;
  }

  .base-iconedItem div[icon] {
    font-size: 30px;
  }

  .base-iconedItem.flex-row div[icon] {
    margin-right: 20px;
  }
}
</style>
