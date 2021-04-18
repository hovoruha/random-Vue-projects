<template>
  <div class="app-sidebar">
    <form class="app-sidebar-menu">
      <sidebar-select :contents="this.currentState" :id="this.selectionId" />
      <sidebar-input :contents="this.sidebarInputs" />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sidebarInput from "./sidebarInput";
import sidebarSelect from "./sidebarSelect";

export default {
  name: "sideBar",

  components: {
    sidebarInput,
    sidebarSelect,
  },

  data() {
    return {
      sidebarInputs: [
        {
          id: "threadTitle",
          type: "text",
          class: "input",
          placeholder: "enter thread subject here...",
        },
        {
          id: "threadDescription",
          type: "text",
          class: "input",
          placeholder: "enter thread description here...",
        },
        {
          id: "threadAuthor",
          type: "text",
          class: "input",
          placeholder: "enter thread author here...",
        },
        {
          type: "submit",
          class: "btn-primary",
          value: "create thread",
          run: this.uploadThread,
        },
      ],

      selectionId: "threadSelect",
    };
  },

  computed: {
    ...mapGetters(["currentState", "currentDate", "getAllThreadsCount"]),
  },

  methods: {
    uploadThread() {
      const title = document.getElementById("threadTitle").value;
      const desc = document.getElementById("threadDescription").value;
      const auth = document.getElementById("threadAuthor").value;
      const insertThread = {
        id: this.getAllThreadsCount + 1,
        title: title,
        description: desc,
        author: auth,
        date: this.currentDate,
        content: [],
      };
      // console.log(insertThread);
      this.$store.state.allThreads.push(insertThread);
    },
  },
};
</script>
