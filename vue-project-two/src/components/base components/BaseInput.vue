<template>
  <input
    class="base-input"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "BaseInput",

  props: ["modelValue"],

  emits: ["update:modelValue"],
};
</script>

<style scoped>
.base-input {
  width: 100%;
  padding: 10px;
  border: 1px solid var(--bk);
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  margin: 5px 0;
}

.base-input:hover {
  cursor: pointer;
  border-color: var(--green1);
}

.base-input:focus {
  border-color: var(--green1);
}

.base-input::placeholder {
  color: var(--bk);
}
</style>
