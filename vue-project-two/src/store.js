import { createStore } from "vuex";

const store = createStore({
  state: {
    navbarIsVisible: false, //folosit de AppNavbar si de AppHomepage...
  },

  getters: {
    getNavbarState(state) {
      return state.navbarIsVisible;
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
