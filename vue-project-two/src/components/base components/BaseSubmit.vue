<template>
  <input class="base-submit" type="submit" />
</template>

<script>
export default {
  name: "BaseSubmit",
};
</script>

<style scoped>
.base-submit {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  outline: none;
  margin: 5px 0;
  font-size: 25px;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
}

.base-submit:hover {
  cursor: pointer;
  background-color: var(--green1);
  transition: all 0.3s ease-in-out;
}
</style>
