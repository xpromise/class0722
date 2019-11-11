const {
  resolve
} = require('path');

const webpack = require('webpack');

module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    path: resolve(__dirname, '../dll'),
    filename: '[name].dll.js',
    library: '[name]' // 与下面name一致
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: resolve(__dirname, '../dll/[name].manifest.json')
    })
  ],
  mode: 'production'
}