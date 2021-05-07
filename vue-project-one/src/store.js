import { createStore } from "vuex";

const store = createStore({
  state: {
    activeThread: "",
    threadIndex: "",
    taskIndex: "",

    allThreads: [
      {
        id: 1,
        title: "This is the first thread",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
        author: "Octavian Hovoruha",
        date: "10/02/2021",
        complete: false,
        content: [
          {
            id: 1,
            priority: "primary",
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
            comments: [
              {
                id: 1,
                author: "User 1",
                date: "10/02/2021",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
              {
                id: 2,
                author: "User 2",
                date: "10/02/2021",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
              {
                id: 3,
                author: "User 3",
                date: "10/02/2021",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
              {
                id: 4,
                author: "User 4",
                date: "10/02/2021",
                comment:
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              },
            ],
          },
          {
            id: 2,
            priority: "primary",
            title: "This is the second task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
            comments: [],
          },
          {
            id: 3,
            priority: "primary",
            title: "This is the third task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: true,
            chatState: false,
            chatCloseDate: "10/02/2021",
            comments: [],
          },
          {
            id: 4,
            priority: "primary",
            title: "This is the fourth task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
            comments: [],
          },
          {
            id: 5,
            priority: "primary",
            title: "This is the fifth task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
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
        complete: false,
        content: [
          {
            id: 1,
            priority: "primary",
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
            comments: [],
          },
          {
            id: 2,
            priority: "primary",
            title: "This is the first task",
            author: "Hovoruha Octavian",
            date: "10/02/2021",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita commodi recusandae eum a eveniet quo fugiat hic voluptatum omnis libero nihil esse architecto cum nulla id ipsum, accusamus laborum illo eaque.",
            complete: false,
            chatState: false,
            chatCloseDate: "10/02/2021",
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

    getAllChatComments: (state) => {
      return state.allThreads[state.threadIndex].content[state.taskIndex]
        .comments.length;
    },

    currentDate: () => {
      const date = new Date();
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const day = date.getUTCDay();
      const h = date.getUTCHours();
      const m = date.getUTCMinutes();
      const s = date.getUTCSeconds();
      const currentDate =
        day + "/" + month + "/" + year + " - " + h + ":" + m + ":" + s;

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

    addTaskComment(state, payload) {
      state.allThreads[payload.thInd].content[payload.tkInd].comments.push(
        payload.obj
      );
      // console.log(
      //   state.allThreads[payload.thInd].content[payload.tkInd].comments
      // );
    },

    setThreadAndTaskIndex(state, payload) {
      state.threadIndex = payload.thInd;
      state.taskIndex = payload.tkInd;
    },
  },

  actions: {},
});

export default store;
