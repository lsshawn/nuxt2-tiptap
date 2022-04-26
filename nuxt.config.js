import colors from "vuetify/es5/util/colors";

export default {
  target: "static",
  env: {},
  head: {
    titleTemplate: "%s - nuxt-boilerplate",
    title: "nuxt-boilerplate",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/assets/scss/style.scss"],
  plugins: [
    {
      src: "~plugins/filters.js",
    },
  ],
  components: true,
  buildModules: ["@nuxtjs/eslint-module", "@nuxtjs/vuetify"],
  modules: [
    "@nuxtjs/axios",
    "@nuxt/content",
    "nuxt-webfontloader",
    [
      "@nuxtjs/localforage",
      {
        name: "APPSSHAWN",
        version: 1.0,
        storeName: "appsshawn",
      },
    ],
  ],
  webfontloader: {
    google: {
      families: ["Lato:400,700,900"],
    },
  },
  axios: {
    baseURL: "/",
  },
  content: {},
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    defaultAssets: true,
    options: {
      customProperties: true,
    },
  },
  build: {},
};
