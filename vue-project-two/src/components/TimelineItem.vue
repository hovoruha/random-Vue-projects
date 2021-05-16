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
/*mobile first styles...*/
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
} done... */

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
} done...*/

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
} done...*/

.timeline-item-content {
  padding: 0 10px;
}

.timeline-item-content div[content] {
  font-size: 11px;
  line-height: 1rem;
}

/* media queries_________________ */
@media only screen and (min-width: 737px) {
  .timeline-item {
    width: calc(50% - 30px);
  }

  .timeline-item.left {
    border-left: none;
    border-right: 5px solid var(--green1);
  }

  .timeline-item.left::after {
    left: initial;
    right: -41px;
  }

  .timeline-item.left::before {
    left: initial;
    right: -35px;
  }

  .timeline-item.right {
    left: calc(50% + 30px);
  }
}
</style>
