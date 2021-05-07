module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint']
}
