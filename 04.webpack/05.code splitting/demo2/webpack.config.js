const {
  resolve
} = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main1: './src/js/index.js',
    main2: './src/js/module1.js'
  },
  output: {
    path: resolve(__dirname, 'build'),
    filename: './js/[name].[contenthash:10].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}