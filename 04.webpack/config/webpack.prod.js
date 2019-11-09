/*
  搭建生产环境的初始化配置：
    1. 因为目录是config里面，所以所有绝对路径都需要回退一层目录
    2. 最终代码是要部署上线。所以资源路径都以/开头
    3. 最终构建后生成的代码不能本地运行：
        npm i serve -g
        serve -s build -p 3000
*/
const {
  resolve
} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, '../build'), // 文件输出目录(只要经过webpack打包的文件，都会输出到这个目录)
    filename: 'js/aaa.js', // 输出文件名(只会将入口文件打包后输出的名称修改)
    publicPath: '/', // 所有输出资源的公共路径
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
        loader: "eslint-loader",
        options: {
          fix: true // 自动修复
        }
      }
    ]
  },
  plugins: [
    // 写plugin的配置
    new HtmlWebpackPlugin({ // 生成一个html文件，并自动引入打包后输出js/css资源
      template: './src/index.html' // 以某个html文件为模板，创建新的html文件（新文件和源文件结构一样）
    }),
    new CleanWebpackPlugin() // 在生成新资源之前，自动清除output.path的目录下面的内容
  ],
  mode: 'production', // 开发模式
  devtool: 'cheap-module-source-map', // 生成source-map（提供与源代码的映射）
  resolve: {
    alias: { // 配置路径别名: 简化路径的写法（缺点：没有路径提示）
      '$css': resolve(__dirname, '../src/css'),
      '$less': resolve(__dirname, '../src/less')
    },
    extensions: ['.js', '.json', '.less', '.css'] // 可以省略文件后缀名
  },
  // target: 'web',
  externals: {
    jquery: '$', // 让jquery不会webpack构建，需要手动使用外链script引入
  }
}