<template>
  <div class="section-item">
    <div class="section-item-title">{{ itemTitle }}</div>
    <div class="section-item-subtitle">{{ itemSubtitle }}</div>
    <div class="section-item-content">{{ itemContent }}</div>
    <div>• • •</div>
  </div>
</template>

<script>
export default {
  name: "BaseSectionItem",

  props: ["itemTitle", "itemSubtitle", "itemContent"],
};
</script>

<style>
.section-item {
  width: 100%;
  color: var(--wh);
  margin-bottom: 20px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);
}
.section-item div:nth-child(2) {
  margin: 15px 0;
}
.section-item div:last-child {
  margin: 0 0 10px 0;
  text-align: center;
}
.section-item .section-item-title {
  font-size: 18px;
  font-weight: bolder;
}
.section-item .section-item-subtitle {
  font-size: 15px;
  font-weight: bold;
}
.section-item .section-item-content {
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
