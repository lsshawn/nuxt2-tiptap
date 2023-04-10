module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // Base ESLint recommended rules
    'eslint:recommended',

    // ESLint typescript rules
    // See https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',

    // `plugin:vue/essential` by default, consider switching to `plugin:vue/strongly-recommended`
    //  or `plugin:vue/recommended` for stricter rules.
    // See https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    'plugin:vue/essential',

    // Usage with Prettier, provided by 'eslint-config-prettier'.
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage-with-prettier
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  plugins: ['@typescript-eslint', 'vue', 'vuetify'],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'warn',
    'no-v-html': 'off',
    'no-lonely-if': 'off',
    'object-shorthand': 'off',
    'arrow-parens': 0,
    'dot-notation': 'off',
    'no-useless-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-case-declarations': 'off',
    'vuetify/no-deprecated-classes': 'error',
    'vuetify/grid-unknown-attributes': 'error',
    'space-before-function-paren': 0,
    'vuetify/no-legacy-grid': 'error',
    'import/order': 'off',
    'spaced-comment': 'off',
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'vue/max-attributes-per-line': 'off',
  },
};
