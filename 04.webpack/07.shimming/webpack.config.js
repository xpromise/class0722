const {
  resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/[name].[contenthash:10].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({ // 向外暴露全局变量 $, 其他模块就不用了引入jquery
      $: 'jquery'
    })
  ],
  mode: 'production'
}