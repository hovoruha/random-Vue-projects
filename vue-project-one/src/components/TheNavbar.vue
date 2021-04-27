<template>
  <div class="app-navbar">
    <h1>{{ appTitle }}</h1>
    <div class="app-navbar-menu">
      <navbar-item :contents="menuLinks" />
    </div>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem";

export default {
  name: "TheNavbar",

  components: {
    NavbarItem,
  },

  data() {
    return {
      appTitle: "Task Tracker",

      menuLinks: [
        { icon: '<i class="fas fa-book"></i>', href: "#", text: "About" },
        {
          icon: '<i class="fas fa-phone-volume"></i>',
          href: "#",
          text: "Contact",
        },
        { icon: '<i class="fas fa-info-circle"></i>', href: "#", text: "FAQ" },
        {
          icon: '<i class="fas fa-sign-in-alt"></i>',
          href: "#",
          text: "Login",
        },
      ],
    };
  },
};
</script>
