<template>
  <label
    v-for="(item, index) in content"
    :key="item"
    class="slide-toggler"
    :class="item.active ? item.class + ' open' : item.class"
  >
    <input
      type="radio"
      :value="item.value"
      @click="
        $emit('activate-toggler', $event.target);
        $emit('set-open', index);
      "
    />
  </label>
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
/* :root {
  --default: lightgray;
  --critical: #000;
  --primary: #18a1cf;
  --danger: #fc8194;
  --warning: #f0be2d;
  --valid: #41b668;
} */

.slide-toggler {
  position: relative;
  display: block;
  width: 30px;
  height: 10px;
  background: lightgray;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  margin: 20px;
}

.slide-toggler:hover {
  cursor: pointer;
}

.slide-toggler.open.critical {
  background-color: #000;
}
.slide-toggler.open.primary {
  background-color: #18a1cf;
}
.slide-toggler.open.danger {
  background-color: #fc8194;
}
.slide-toggler.open.warning {
  background-color: #f0be2d;
}
.slide-toggler.open.valid {
  background-color: #41b668;
}

.slide-toggler::before {
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

.slide-toggler.open::before {
  transform: translateX(16.5px);
  transition: all 0.3s ease-in-out;
}

.slide-toggler input[type="radio"] {
  width: 0;
  height: 0;
}
</style>
