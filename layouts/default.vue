<template>
  <v-app>
    <app-menu
      v-show="mounted"
      app
    />
    <v-main>
      <nuxt />
    </v-main>

    <app-footer app />
  </v-app>
</template>

<script>
import AppFooter from '~/components/AppFooter.vue';
import AppMenu from '~/components/AppMenu.vue';

export default {
  components: {
    AppFooter,
    AppMenu,
  },
  data() {
    return {
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
};
</script>

<style></style>
