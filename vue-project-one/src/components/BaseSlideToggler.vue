<template>
  <div class="slide-toggler" v-for="(item, index) in content" :key="item">
    <span>{{ item.info }}</span>
    <label
      class="slide-toggler-container"
      :class="item.active ? item.class + ' open' : item.class"
    >
      <input
        type="radio"
        :value="item.value"
        @click="
          $emit('activate-toggler', $event.target);
          $emit('set-open', index, $event, target);
        "
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "BaseSlideToggler",

  props: {
    content: Array,
  },

  emits: ["activate-toggler", "set-open"],

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
/* .slide-toggler {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
}

.slide-toggler span {
  font-size: 11px;
  color: #5c5c5c;
}

.slide-toggler .slide-toggler-container {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 10px;
  background: darkgray;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  margin: 20px;
}

.slide-toggler .slide-toggler-container:hover {
  cursor: pointer;
}

.slide-toggler .slide-toggler-container.open.critical {
  background-color: #000;
}
.slide-toggler .slide-toggler-container.open.primary {
  background-color: #18a1cf;
}
.slide-toggler .slide-toggler-container.open.danger {
  background-color: #fc8194;
}
.slide-toggler .slide-toggler-container.open.warning {
  background-color: #f0be2d;
}
.slide-toggler .slide-toggler-container.open.valid {
  background-color: #41b668;
}

.slide-toggler .slide-toggler-container::before {
  content: "";
  position: absolute;
  top: -2.52px;
  left: -1px;
  width: 15px;
  height: 15px;
  background-color: white;
  border-radius: 7.5px;
  transition: all 0.3s ease-in-out;
}

.slide-toggler .slide-toggler-container.open::before {
  transform: translateX(16.5px);
  transition: all 0.3s ease-in-out;
}

.slide-toggler .slide-toggler-container input[type="radio"] {
  width: 0;
  height: 0;
} */
</style>
