/*
  webpack的配置文件：webpack.config.js 当你运行webpack指令时会默认读取的配置文件

  所有构建工具都是基于nodejs平台。所以模块化使用commonjs

  常见错误：
    1. Cannot find module 'less'
      解决方案： npm i less -D
*/
const {
  resolve
} = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, 'build/js'), // 文件输出目录(只要经过webpack打包的文件，都会输出到这个目录)
    filename: 'built.js' // 输出文件名(只会将入口文件打包后输出的名称修改)
  },
  module: {
    rules: [
      // 写loader的配置
      {
        test: /\.css$/, // 检测css文件
        use: [ // 从下到上，从右到左依次执行
          'style-loader', // 创建一个style标签，将js中的css代码放入style标签中生效
          'css-loader', // 将css文件解析成字符串，以commonjs模块化方式引入到js中
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' // 将less编译成css
        ]
      }
    ]
  },
  plugins: [
    // 写plugin的配置

  ],
  mode: 'development', // 开发模式
}