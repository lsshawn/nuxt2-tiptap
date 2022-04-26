<template>
  <div>
    <v-app-bar flat dense class="app-header">
      <v-container class="fill-height py-0">
        <div class="d-flex align-center">
          <router-link to="/">
            <v-img
              src="/img/logo.png"
              alt="logo"
              max-width="50"
              max-height="50"
            />
          </router-link>
          <h5 class="ma-0">SShawn</h5>
        </div>

        <v-spacer />

        <div v-if="$vuetify.breakpoint.smAndUp && showTopMenu">
          <template v-for="link in links">
            <v-btn
              :key="link.route"
              color="grey darken-2"
              text
              small
              :value="link.value"
              nuxt
              :to="link.route"
              class="menu-text mx-10"
            >
              {{ link.text }}
            </v-btn>
          </template>
        </div>
      </v-container>
    </v-app-bar>

    <!-- Mobile bottom menu -->
    <v-bottom-navigation
      v-if="$vuetify.breakpoint.xsOnly && showBottomMenu"
      class="d-md-none"
      fixed
      :value="activeTab"
      color="yellow darken-3"
    >
      <template v-for="link in links">
        <v-btn nuxt icon :to="link.route" :key="link.value">
          <span>{{ link.text }}</span>
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
      </template>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  props: {
    showBottomMenu: {
      type: Boolean,
      default: false,
    },
    showTopMenu: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeTab: "home",
      links: [
        { text: "Home", value: "home", icon: "mdi-home", route: "/" },
        { text: "About", value: "about", icon: "mdi-person", route: "/about" },
      ],
    };
  },
  computed: {
    isSlug() {
      return Object.keys(this.$router.params).length > 0;
    },
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.app-header {
  &.v-sheet {
    background-color: #fffffff0 !important;
    height: 70px !important;
    .v-toolbar__content {
      height: 70px !important;
    }
  }
  .navbar-nav {
    align-items: center;
  }
}

.bottomNavBtn {
  height: unset !important;
}
</style>
