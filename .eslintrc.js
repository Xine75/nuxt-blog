module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': "off",
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": ["index", "admin", "error"]
      }
    ],
    quotes: [0, "double"],
    'nuxt/not-timing-in-fetch-data': 'off',

  }
}
