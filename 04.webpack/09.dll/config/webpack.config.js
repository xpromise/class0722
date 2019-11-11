const {
  resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: resolve(__dirname, '../build'),
    filename: './js/[name].[contenthash:10].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DllReferencePlugin({ // 让webpack不打包jquery
      manifest: resolve(__dirname, '../dll/jquery.manifest.json')
    }),
    new AddAssetHtmlPlugin({ // 为了引入js
      filepath: resolve(__dirname, '../dll/jquery.dll.js')
    }),
  ],
  mode: 'production'
}