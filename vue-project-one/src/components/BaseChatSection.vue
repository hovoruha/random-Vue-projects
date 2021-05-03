<template>
  <div class="container-col">
    <div class="container-col-header">
      <div>
        <input
          id="chatAuthor"
          class="input"
          type="text"
          placeholder="author name here..."
          @input="$emit('chat-author', $event.target.value)"
        />
        <textarea
          class="input"
          placeholder="your comment here..."
          @keypress.enter="$emit('test-event', $event.target)"
        ></textarea>
      </div>
      <div class="close-icon" @click="$emit('close-chat')">
        <i class="fas fa-times"></i>
      </div>
    </div>
    <div class="container-col-body">
      <chat-section-comment :contents="chatContents" />
    </div>
    <!-- <div class="container-col-footer"></div> -->
  </div>
</template>

<script>
import ChatSectionComment from "./ChatSectionComment";

export default {
  name: "BaseChatSection",

  components: {
    ChatSectionComment,
  },

  props: {
    chatContents: Array,
  },

  emits: ["close-chat", "test-event", "chat-author"],

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.container-col {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

textarea {
  resize: vertical;
}
</style>
