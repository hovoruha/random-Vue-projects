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

    aboutPageContents: [
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "left",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "right",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "left",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "right",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "left",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "right",
      },
      {
        title: "Lorem ipsum",
        subtitle: "Lorem ipsum dolor sit amet, consectetur",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur natus animi reiciendis eligendi magni ipsa. Facilis, itaque delectus repellendus voluptatibus deserunt nemo amet sit?",
        position: "left",
      },
    ],

    contactCredentials: [
      { icon: "far fa-envelope-open", text: "octavian.hovoruha@gmail.com" },
      { icon: "fas fa-mobile-alt", text: "+40 721 537 057" },
      { icon: "fab fa-slack", text: "get in touch on Slack" },
      { icon: "fab fa-linkedin", text: "follow me on LinkedIn" },
      // { icon: "fab fa-github", text: "follow me on GitHub" },
    ],
  },

  getters: {
    getNavbarState(state) {
      return state.navbarIsVisible;
    },

    getHomepageContents(state) {
      return state.homepageContents;
    },

    getAboutPageContents(state) {
      return state.aboutPageContents;
    },

    getContactCredentials(state) {
      return state.contactCredentials;
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
