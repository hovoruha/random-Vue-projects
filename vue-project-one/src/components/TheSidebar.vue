<template>
  <div class="app-sidebar" :class="this.isPinned ? 'open' : ''">
    <div class="app-sidebar-tabs">
      <sidebar-tab
        :content="this.sidebarTabs"
        @clickAction="this.activateTab"
      />
    </div>
    <base-pin-item @activate-pin="lockSidebar()" />
    <form class="app-sidebar-menu">
      <sidebar-select
        :contents="this.currentState"
        :id="this.selectionId"
        v-if="this.hasSelection"
        @set-active-thread-id="setActiveThread"
      />
      <div v-if="this.hasPriorities">
        <base-slide-toggler
          :content="this.togglers"
          @activate-toggler="activePriority"
          @set-open="setOpen"
        />
      </div>
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
import SidebarTab from "./SidebarTab";
import SidebarInput from "./SidebarInput";
import SidebarSelect from "./SidebarSelect";
import BasePinItem from "./BasePinItem";
import BaseSlideToggler from "./BaseSlideToggler";

export default {
  name: "TheSidebar",

  components: {
    SidebarTab,
    SidebarInput,
    SidebarSelect,
    BasePinItem,
    BaseSlideToggler,
  },

  data() {
    return {
      isPinned: false,

      sidebarTabs: [
        {
          text: "New Thread",
          isActive: true,
          threadSelection: false,
          priorityTogglers: false,
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
          priorityTogglers: true,
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
              run: this.uploadTask,
            },
          ],
        },
      ],

      togglers: [
        { class: "critical", value: "critical", active: false },
        { class: "danger", value: "urgent", active: false },
        { class: "warning", value: "important", active: false },
      ],

      hasSelection: "",
      selectionId: "threadSelect",
      hasPriorities: "",
      prioritySetters: "",
    };
  },

  computed: {
    ...mapGetters([
      "currentState",
      "currentDate",
      "getAllThreadsCount",
      "getAllTasksCount",
    ]),
  },

  methods: {
    setOpen(i) {
      //reset all togglers to false state (unchecked...)
      this.togglers.forEach((toggle) => {
        toggle.active = false;
      });
      console.log(this.togglers[i].active);
      this.togglers[i].active = !this.togglers[i].active;
      console.log(this.togglers[i].active);
    },

    activePriority(e) {
      this.prioritySetters = e.value;
      console.log(this.prioritySetters);
    },

    lockSidebar() {
      this.isPinned = !this.isPinned;
    },

    setActiveThread(e) {
      this.$store.state.activeThread = e;
    },

    uploadThread() {
      const title = document.getElementById("threadTitle");
      const desc = document.getElementById("threadDescription");
      const auth = document.getElementById("threadAuthor");

      //basic input validation...
      if (title.value == "") {
        alert("nu ati introdus titlul thread-ului...");
        return;
      } else if (desc.value == "") {
        alert("nu ati introdus descrierea thread-ului...");
        return;
      } else if (auth.value == "") {
        alert("nu ati introdus autorul thread-ului...");
        return;
      } else {
        const insertThread = {
          id: this.getAllThreadsCount + 1,
          title: title.value,
          description: desc.value,
          author: auth.value,
          date: this.currentDate,
          complete: false,
          content: [],
        };

        //push data to $store...
        this.$store.commit("addThread", insertThread);

        //clear all inputs value after uploading data...
        title.value = "";
        desc.value = "";
        auth.value = "";
      }
    },

    uploadTask() {
      const threadSelect = document.getElementById("threadSelect");
      const title = document.getElementById("taskTitle");
      const text = document.getElementById("taskContent");
      const auth = document.getElementById("taskAuthor");

      //basic input validation...
      if (threadSelect.value == "false") {
        alert("nu ati selectat un thread din lista...");
        return;
      } else if (title.value == "") {
        alert("nu ati introdus titlul task-ului...");
        return;
      } else if (text.value == "") {
        alert("nu ati introdus descrierea task-ului...");
        return;
      } else if (auth.value == "") {
        alert("nu ati introdus autorul task-ului...");
        return;
      } else {
        const insertTask = {
          id: this.getAllTasksCount + 1,
          title: title.value,
          author: auth.value,
          date: this.currentDate,
          content: text.value,
          complete: false,
          chatState: false,
          chatCloseDate: "",
          comments: [],
        };

        //push data to $store...
        this.$store.commit("addTask", insertTask);
      }
      //clear all inputs value after uploading data...
      title.value = "";
      text.value = "";
      auth.value = "";
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
      //mark that the tab poseses priority togglers
      this.hasPriorities = this.sidebarTabs[
        tabIndexInTabsArray
      ].priorityTogglers;
    },
  },
};
</script>
