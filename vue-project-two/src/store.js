import { createStore } from "vuex";

const store = createStore({
  state: {
    navbarIsVisible: false, //folosit de AppNavbar si de AppHomepage...

    homepageContents: [
      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit? Magni sequi at dignissimos blanditiis. Libero.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit? Magni sequi at dignissimos blanditiis. Libero.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit? Magni sequi at dignissimos blanditiis. Libero.",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit? Magni sequi at dignissimos blanditiis. Libero.",
      },
    ],
  },

  getters: {
    getNavbarState(state) {
      return state.navbarIsVisible;
    },

    getHomepageContents(state) {
      return state.homepageContents;
    },
  },

  mutations: {
    displayNavbar(state) {
      state.navbarIsVisible = true;
    },

    hideNavbar(state) {
      state.navbarIsVisible = false;
    },
  },

  actions: {},
});

export default store;
