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
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './public/index.html'],
  output: {
    path: resolve(__dirname, '../build'), // 文件输出目录(只要经过webpack打包的文件，都会输出到这个目录)
    filename: './js/built.js' // 输出文件名(只会将入口文件打包后输出的名称修改)
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
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240, // 小于10kb大小的图片会被base64处理
            outputPath: 'images', // 在原来path路径的基础上进行修改
            name: '[hash:10].[ext]' // [hash:10] -> hash值取前10位  [ext] -> 补全之前的文件扩展名
          }
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader' // 处理html的img
      },
      {
        test: /\.(eot|ttf|woff|svg|mp3|mp4)$/,
        loader: 'file-loader', // 将文件原封不动输出出去
        options: {
          outputPath: 'media',
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules不检查
        enforce: 'pre', // 优先执行
        loader: "eslint-loader",
        options: {
          fix: true // 自动修复
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'], // 编译react语法
              cacheDirectory: true, // 开启缓存文件夹
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 写plugin的配置
    new HtmlWebpackPlugin({ // 生成一个html文件，并自动引入打包后输出js/css资源
      template: './public/index.html' // 以某个html文件为模板，创建新的html文件（新文件和源文件结构一样）
    })
  ],
  mode: 'development', // 开发模式
  // 开发服务器  npm i webpack-dev-server -D
  // 运行指令： npx webpack-dev-server ，这个运行指令才能启动devServer的配置
  devServer: {
    contentBase: resolve(__dirname, '../build'), // 将指定目录资源暴露出去
    compress: true, // 开启gzip压缩
    port: 3000, // 端口号
    open: true, // 自动打开浏览器
    hot: true, // 开启HMR 模块热替换 功能
  },
  devtool: 'cheap-module-source-map', // 生成source-map（提供与源代码的映射）
  resolve: {
    alias: { // 配置路径别名: 简化路径的写法（缺点：没有路径提示）
      // '$css': resolve(__dirname, '../src/css'),
      // '$less': resolve(__dirname, '../src/less')
    },
    // extensions: ['.js', '.json'] // 可以省略文件后缀名
  },
}