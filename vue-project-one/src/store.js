import { createStore } from "vuex";

const store = createStore({
  state: {
    allThreads: [
      {
        id: 1,
        title: "This is the first thread",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
        author: "Octavian Hovoruha",
        date: "10/02/2021",
        content: [
          "aici vor fi listate obiecte ce contin task-urile, apoi obiectele vor fi folosite la popularea componentei taskItem.vue prin iterare v-for:",
        ],
      },
      {
        id: 2,
        title: "This is the second thread",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
        author: "Octavian Hovoruha",
        date: "10/02/2021",
        content: [],
      },
    ],
  },

  getters: {
    currentState: (state) => {
      return state.allThreads;
    },

    getAllThreadsCount: (state) => {
      return state.allThreads.length;
    },

    currentDate: () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      const currentDate = day + " / " + month + " / " + year;

      return currentDate;
    },
  },

  mutations: {
    removeThread(state, i) {
      state.allThreads.splice(i, 1);
    },

    addThread(state) {
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

      state.allThreads.push(insertThread);
    },
  },

  actions: {},
});

export default store;
