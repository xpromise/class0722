 const {
   override,
   fixBabelImports,
   addLessLoader,
   addWebpackAlias
 } = require('customize-cra');

 const {
   resolve
 } = require('path');

 module.exports = override(
   // 实现样式按需加载
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
   // 自定义主题
   addLessLoader({
     javascriptEnabled: true,
     modifyVars: {
       '@primary-color': '#F90'
     },
   }),
   // 配置路径别名
   addWebpackAlias({
     'comps': resolve(__dirname, './src/components')
   })
 );