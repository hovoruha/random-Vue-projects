<template>
  <textarea
    class="base-textarea"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "BaseTextarea",

  props: ["modelValue"],

  emits: ["update:modelValue"],
};
</script>

<style scoped>
.base-textarea {
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid var(--bk);
  border-radius: 5px;
  background-color: transparent;
  outline: none;
  margin: 5px 0;
}

.base-textarea:hover {
  cursor: pointer;
  border-color: var(--green1);
}

.base-textarea:focus {
  border-color: var(--green1);
}

.base-textarea::placeholder {
  color: var(--bk);
}
</style>
