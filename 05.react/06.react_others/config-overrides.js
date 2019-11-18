const {
  override,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  // 让webpack支持Decorator语法
  // yarn add @babel/plugin-proposal-decorators --dev
  addDecoratorsLegacy()
);