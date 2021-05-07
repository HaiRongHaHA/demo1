module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order'
  ],
  plugins: [
    'stylelint-selector-bem-pattern'
  ],
  rules: {
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      // 知道组件名称的检查规则
      componentName: '[a-z]+',
      componentSelectors: {
        // 只初始的选择器规则（可以理解为外层的class规则）
        initial: '^\\.{componentName}(?:__[-a-z]+)?(?:--[a-z]+)?$',
        // 可以理解为外层yi
        combined: '^\\.{componentName}(?:__[-a-z]+)(?:--[a-z]+)?$'
      },
      utilitySelectors: '^\\.u-[a-z]+$',
      ignoreSelectors: ['^\\.el-', '/deep/', '>>>', '^\\.icon-'],
      ignoreCustomProperties: [],
    }
  }
}
