<template>
  <div class="timeline-item">
    <div class="timeline-item-content">
      <slot name="title"></slot>
      <slot name="subtitle"></slot>
      <div content><slot name="content"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimelineItem",
};
</script>

<style scoped>
.timeline-item {
  position: relative;
  padding: 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
}

.timeline-item.left {
  border-left: 5px solid var(--green1);
}

.timeline-item.right {
  border-left: 5px solid var(--green1);
}

/* .timeline-item.right {
  border-right: 5px solid var(--green1);
} */

.timeline-item::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 16px;
  width: 6px;
  height: 6px;
  background-color: var(--green2);
  border: 2px solid var(--green1);
  border-radius: 50%;
}

.timeline-item.left::after {
  left: -39px;
}

.timeline-item.right::after {
  left: -39px;
}

/* .timeline-item.right::after {
  right: -39px;
} */

.timeline-item::before {
  content: "";
  position: absolute;
  top: 20px;
  width: 30px;
  height: 2px;
  background-color: var(--green1);
}

.timeline-item.left::before {
  left: -35px;
}

.timeline-item.right::before {
  left: -35px;
}

/* .timeline-item.right::before {
  right: -35px;
} */

.timeline-item-content {
  padding: 0 10px;
}

.timeline-item-content div[content] {
  font-size: 11px;
  line-height: 1rem;
}

/* media queries_________________ */
</style>
