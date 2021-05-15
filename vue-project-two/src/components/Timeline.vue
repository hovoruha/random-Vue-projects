<template>
  <div class="timeline">
    <!-- de extras intr-o componenta separata... -->
    <slot></slot>
    <!-- _______________________________________ -->
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>

<style scoped>
/*mobile first...*/
.timeline {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 30px;
}

/* .timeline::after {
  content: "";
  position: absolute;
  width: 2px;
  height: 600px; 
  background-color: var(--green1);
  top: -22px;
  bottom: 0;
  left: 50%;
} */

.timeline::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(50% - 10px);
  /* height: 600px; */
  border: 2px solid var(--green1);
  border-color: var(--green1) transparent transparent var(--green1);
  border-radius: 10px 0 0 0;
  background-color: transparent;
}

.timeline::before {
  content: "";
  position: absolute;
  top: -22px;
  left: 10px;
  width: calc(50% - 10px);
  height: 20px;
  border: 2px solid var(--green1);
  border-color: transparent var(--green1) var(--green1) transparent;
  border-radius: 0 0 10px 0;
  background-color: transparent;
}
</style>
