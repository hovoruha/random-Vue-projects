<template>
  <div class="app-sidebar">
    <div class="app-sidebar-tabs">
      <sidebar-tab
        :content="this.sidebarTabs"
        @clickAction="this.activateTab"
      />
    </div>
    <form class="app-sidebar-menu">
      <sidebar-select
        :contents="this.currentState"
        :id="this.selectionId"
        v-if="!this.sidebarTabs[0].isActive"
      />
      <sidebar-input
        v-for="itm in this.sidebarTabs"
        :key="itm"
        :contents="itm.isActive ? itm.inputs : null"
      />
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sidebarTab from "./sidebarTab";
import sidebarInput from "./sidebarInput";
import sidebarSelect from "./sidebarSelect";

export default {
  name: "sideBar",

  components: {
    sidebarTab,
    sidebarInput,
    sidebarSelect,
  },

  data() {
    return {
      sidebarTabs: [
        {
          text: "New Thread",
          isActive: true,
          inputs: [
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
        },
        {
          text: "New Task",
          isActive: false,
          inputs: [
            {
              id: "taskTitle",
              type: "text",
              class: "input",
              placeholder: "enter task title here...",
            },
            {
              id: "taskContent",
              type: "text",
              class: "input",
              placeholder: "enter task content here...",
            },
            {
              id: "taskAuthor",
              type: "text",
              class: "input",
              placeholder: "enter task author here...",
            },
            {
              type: "submit",
              class: "btn-primary",
              value: "create task",
              run: null,
            },
          ],
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

      this.$store.state.allThreads.push(insertThread);
    },

    activateTab(e) {
      const texts = [];
      const myTabs = document.querySelectorAll("span.app-sidebar-tabs-item");

      myTabs.forEach((tab) => {
        texts.push(tab.innerHTML);
      });

      const actiTab = texts.findIndex((txt) => txt == e.innerHTML);

      //reset all isActive state to false
      this.sidebarTabs.forEach((item) => {
        item.isActive = false;
      });
      //set to true only the state of the activated tab
      this.sidebarTabs[actiTab].isActive = true;
    },
  },
};
</script>
