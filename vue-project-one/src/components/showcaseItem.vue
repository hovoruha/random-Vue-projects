<template>
  <div
    class="app-showcase-item"
    v-for="(item, index) in contents"
    :key="item"
    @mouseover="getThreadIndex(index)"
  >
    <base-modal
      v-if="item.complete"
      :contentText="modalContentText"
      :buttonCaption="modalButtonCaption"
      @reopen-thread="reopenThread(item, index)"
    />
    <div class="app-showcase-item-header">
      <div class="app-showcase-item-header-title">
        <div class="app-showcase-item-header-title-menu">
          <span><i class="fas fa-info-circle"></i></span>
          <span @click="$emit('complete-thread', index)"
            ><i class="far fa-check-circle"></i
          ></span>
          <span @click="$emit('remove-thread', index)"
            ><i class="fas fa-trash-alt"></i
          ></span>
        </div>
        <div class="app-showcase-item-header-title-text">
          {{ item.title }}
        </div>
      </div>
      <div class="app-showcase-item-header-description">
        {{ item.description }}
      </div>
      <div class="app-showcase-item-header-author">
        <span>issued by :</span>
        {{ item.author }}
      </div>
      <div class="app-showcase-item-header-date">
        <span>on :</span>
        {{ item.date }}
      </div>
    </div>
    <div class="app-showcase-item-content">
      <showcase-task-item
        :contents="item.content"
        @remove-task="removeTask"
        @complete-task="markCompletedTask"
      />
    </div>
  </div>
</template>

<script>
import ShowcaseTaskItem from "./ShowcaseTaskItem";
import BaseModal from "./BaseModal";

export default {
  name: "ShowcaseItem",

  components: {
    ShowcaseTaskItem,
    BaseModal,
  },

  props: {
    contents: Array,
    date: String,
  },

  emits: ["remove-thread", "complete-thread"],

  data() {
    return {
      threadInd: "",
      modalContentText:
        "This thread is closed. Click the button below to reopen it.",
      modalButtonCaption: "reopen thread",
    };
  },

  computed: {},

  methods: {
    getThreadIndex(i) {
      this.threadInd = i;
    },

    removeTask(i) {
      // console.log(this.threadInd + " / " + i);
      this.$store.state.allThreads[this.threadInd].content.splice(i, 1);
    },

    markCompletedTask(i) {
      //toggle the current task complete-status...
      const currentCompleteStatus = this.$store.state.allThreads[this.threadInd]
        .content[i].complete;
      if (currentCompleteStatus === false) {
        this.$store.state.allThreads[this.threadInd].content[i].complete = true;
      } else {
        this.$store.state.allThreads[this.threadInd].content[
          i
        ].complete = false;
      }
    },

    reopenThread(item, index) {
      console.log(index + " " + item.complete);
      item.complete = false;
      console.log(item.complete);
    },
  },
};
</script>
