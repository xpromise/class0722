const {
  resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/built.js'
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
      filename: "css/[name].css",
      chunkFilename: "css/[id].css"
    }),
  ],
  mode: 'production'
}