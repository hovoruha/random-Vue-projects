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
        v-if="this.hasSelection"
      />
      <sidebar-input
        v-for="item in this.sidebarTabs"
        :key="item"
        :contents="item.isActive ? item.inputs : null"
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
          threadSelection: false,
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
          threadSelection: true,
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

      hasSelection: "",
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
      //use of e.target to target the tab innerText
      const tabInnerText = e.innerHTML;
      //target the tabs index in sidebarTabs array conditionned by the innerText
      const tabIndexInTabsArray = this.sidebarTabs.findIndex(
        (tab) => tab.text == tabInnerText
      );
      //reset all active states to false
      this.sidebarTabs.forEach((item) => {
        item.isActive = false;
      });
      //set the active state to true for the selected tab
      this.sidebarTabs[tabIndexInTabsArray].isActive = true;
      //mark that the tab poseses a thread selection field
      this.hasSelection = this.sidebarTabs[tabIndexInTabsArray].threadSelection;
    },
  },
};
</script>
