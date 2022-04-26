module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
}

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
    commonjs: true
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['vue', 'vuetify'],
  override: [
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true
        }
      ]
    }
  ]
}
