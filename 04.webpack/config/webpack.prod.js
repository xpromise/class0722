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
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: resolve(__dirname, '../build'), // 文件输出目录(只要经过webpack打包的文件，都会输出到这个目录)
    filename: 'js/[name].[contenthash:10].js', // 输出文件名(只会将入口文件打包后输出的名称修改)
    publicPath: '/', // 所有输出资源的公共路径
  },
  module: {
    rules: [
      // 写loader的配置
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
        oneOf: [ // 以下loader只会命中一个
          {
            test: /\.css$/, // 检测css文件
            use: [ // 从下到上，从右到左依次执行
              MiniCssExtractPlugin.loader, // 提取css成单独文件
              'css-loader', // 将css文件解析成字符串，以commonjs模块化方式引入到js中
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('postcss-import')({
                      root: loader.resourcePath
                    }),
                    require('postcss-preset-env')(),
                    require('cssnano')()
                  ]
                }
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              MiniCssExtractPlugin.loader, // 提取css成单独文件
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('postcss-import')({
                      root: loader.resourcePath
                    }),
                    require('postcss-preset-env')(),
                    require('cssnano')()
                  ]
                }
              },
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
            exclude: /(node_modules)/,
            use: [
              'thread-loader', // 开启多进程打包
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        useBuiltIns: 'usage', // 实现按需加载
                        corejs: {
                          version: 3,
                          proposals: true
                        },
                        targets: { // 兼容到哪些版本的浏览器
                          chrome: "58",
                          ie: "9",
                          firefox: "58"
                        }
                      }
                    ]
                  ],
                  cacheDirectory: true, // 开启缓存文件夹
                }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    // 写plugin的配置
    new HtmlWebpackPlugin({ // 生成一个html文件，并自动引入打包后输出js/css资源
      template: './src/index.html', // 以某个html文件为模板，创建新的html文件（新文件和源文件结构一样）
      minify: {
        collapseWhitespace: true, // 去除空格 换行符
        removeComments: true, // 去除注释
        removeRedundantAttributes: true, // 移除默认值
        removeScriptTypeAttributes: true, // 移除script的type属性
        removeStyleLinkTypeAttributes: true, // 移除style/link的type属性
        useShortDoctype: true // 使用html5的文档声明
      }
    }),
    new CleanWebpackPlugin(), // 在生成新资源之前，自动清除output.path的目录下面的内容
    new MiniCssExtractPlugin({ // 提取css成单独文件
      filename: "css/[contenthash:10].css",
      chunkFilename: "css/[id].[contenthash:10].css"
    }),
    new OptimizeCssAssetsPlugin({ // 压缩css
      // assetNameRegExp: /\.css$/g,
      // cssProcessor: require('cssnano'),
      cssProcessorOptions: { // 开启source map
        map: {
          inline: false,
          annotation: true,
        }
      },
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }],
      },
      // canPrint: true
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ],
  mode: 'production', // 开发模式
  devtool: 'source-map', // 生成source-map（提供与源代码的映射）
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