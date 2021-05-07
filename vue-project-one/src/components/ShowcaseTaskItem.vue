<template>
  <div
    v-for="(item, i) in contents"
    :key="item"
    class="task-item"
    :class="item.complete ? 'item-valid' : 'item-' + item.priority"
  >
    <base-chat-section
      v-if="item.chatState"
      :chatContents="item.comments"
      @close-chat="closeChat(item)"
      @chat-author="setChatAuthor"
      @test-event="uploadComment"
    />
    <div class="task-item-header">
      <div class="task-item-header-title">{{ item.id }} - {{ item.title }}</div>
      <div class="task-item-header-menu">
        <span @click="openChat(item, i)"
          ><i class="fas fa-comment-dots"></i
        ></span>
        <span @click="$emit('complete-task', i)"
          ><i
            :class="
              item.complete ? 'far fa-times-circle' : 'far fa-check-circle'
            "
          ></i
        ></span>
        <span @click="$emit('remove-task', i)"
          ><i class="fas fa-trash-alt"></i
        ></span>
      </div>
    </div>
    <div class="task-item-details">
      <div class="task-item-details-author">
        <span>issued by: </span>{{ item.author }}
      </div>
      <div class="task-item-details-date"><span>on: </span>{{ item.date }}</div>
    </div>
    <div class="task-item-content">{{ item.content }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseChatSection from "./BaseChatSection";

export default {
  name: "ShowcaseTaskItem",

  components: {
    BaseChatSection,
  },

  props: {
    contents: Array,
    threadIndex: Number,
  },

  data() {
    return {
      isComplete: false,
      chatAuthor: "",
      taskIndex: "",
    };
  },

  emits: ["complete-task", "remove-task"],

  computed: {
    ...mapGetters(["currentDate", "currentState", "getAllChatComments"]),
  },

  methods: {
    closeChat(item) {
      item.chatState = false;
      //set the chat close date in order to keep track of unread comments...
      // console.log(item.chatCloseDate);
      item.chatCloseDate = this.currentDate;
      // console.log(item.chatCloseDate);
    },

    openChat(item, index) {
      item.chatState = true;
      this.taskIndex = index;
      // console.log(this.TaskIndex);
      this.$store.commit({
        type: "setThreadAndTaskIndex",
        thInd: this.threadIndex,
        tkInd: this.taskIndex,
      });
    },

    setChatAuthor(e) {
      this.chatAuthor = e;
    },

    uploadComment(e) {
      if (this.chatAuthor == "") {
        alert("autorul nu este setat...");
        return;
      } else {
        // alert(e.value);
        // console.log(this.chatAuthor);
        const currentComment = {
          id: this.getAllChatComments + 1,
          author: this.chatAuthor,
          date: this.currentDate,
          comment: e.value,
        };
        // console.log(currentComment);
        // console.log(this.threadIndex, this.taskIndex);
        this.$store.commit({
          type: "addTaskComment",
          thInd: this.threadIndex,
          tkInd: this.taskIndex,
          obj: currentComment,
        });
        e.value = "";
      }

      // console.log(this.getAllChatComments);
    },
  },
};
</script>
