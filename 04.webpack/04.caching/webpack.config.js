const {
  resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/*
  hash: webpack打包回生成一个hash值（只要打包内容发生变化，hash都会变化）。
    问题：修改css文件变化，js没变，但是因为所有文件共享同一个hash，所以js文件缓存就失效
  chunkhash
    打包输出的资源。不同资源有不同的chunk。
    问题：如果资源是从一个chunk中打包出来的，那么这些资源共享同一个chunkhash
  contenthash
    根据文件的内容来生成hash值。文件内容不同，hash就不同
*/

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/[contenthash:10].js'
  },
  module: {
    rules: [
      // loader
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({ // 提取css成单独文件
      filename: "css/[contenthash:10].css",
      chunkFilename: "css/[contenthash:10].css"
    }),
  ],
  mode: 'production'
}