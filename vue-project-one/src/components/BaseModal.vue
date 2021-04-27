<template>
  <div class="base-modal-col">
    <div class="base-modal-col-text">{{ contentText }}</div>
    <div class="btn" @click="$emit('reopen-thread')">
      {{ buttonCaption }}
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",

  props: {
    contentText: String,
    buttonCaption: String,
  },

  emits: ["reopen-thread"],
};
</script>
