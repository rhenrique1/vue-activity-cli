module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
      'plugin:vue/recommended'
    ],
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'vue/max-attributes-per-line': 0,
      'vue/singleline-html-element-content-newline': 0,
      'vue/html-indent': 0
    }
  }