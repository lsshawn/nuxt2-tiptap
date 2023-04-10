import colors from 'vuetify/es5/util/colors';

export default {
  target: 'static',
  env: {},
  head: {
    titleTemplate: '%s - nuxt-boilerplate',
    title: 'nuxt-boilerplate',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/style.scss'],
  plugins: [{ src: '~plugins/tiptapVuetify', mode: 'client' }],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxt/content', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Lato:400,700,900'],
    },
  },
  axios: {
    baseURL: '/',
  },
  content: {},
  vuetify: {
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#25509f',
          secondary: '#193B68',
          accent: '#eef3f9',
          success: '#4CAF50',
          error: '#C73424',
          info: '#f68c06',
        },
      },
    },
  },
  build: {
    extend(config, ctx) {
      config.node = {
        fs: 'empty',
      };
    },
    transpile: ['vuetify/lib', 'tiptap-vuetify', 'vue-plugin-load-script'],
  },
};
