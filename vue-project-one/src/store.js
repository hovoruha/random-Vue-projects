import { createStore } from "vuex";

const store = createStore({
  state: {
    activeThread: "",

    allThreads: [
      {
        id: 1,
        title: "This is the first thread",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
        author: "Octavian Hovoruha",
        date: "10/02/2021",
        content: [
          {
            id: 1,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            comments: [],
          },
          {
            id: 2,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            comments: [],
          },
          {
            id: 3,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: true,
            comments: [],
          },
          {
            id: 4,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            comments: [],
          },
        ],
      },
      {
        id: 2,
        title: "This is the second thread",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
        author: "Octavian Hovoruha",
        date: "10/02/2021",
        content: [
          {
            id: 1,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            comments: [],
          },
          {
            id: 2,
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            comments: [],
          },
        ],
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

    getAllTasksCount: (state) => {
      //get the index of the selected thread
      const indexInThreads = state.allThreads.findIndex(
        (item) => item.title === state.activeThread
      );
      return state.allThreads[indexInThreads].content.length;
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

    addThread(state, obj) {
      state.allThreads.push(obj);
    },

    addTask(state, obj) {
      //get index of thread based on the activeThread value
      const threadIndex = state.allThreads.findIndex(
        (item) => item.title === state.activeThread
      );
      //use index to focus onto the content array-prop
      state.allThreads[threadIndex].content.push(obj);
    },
  },

  actions: {},
});

export default store;
