## Webpack 更新日志

### 开发环境

1. 修改 entry 配置

- 将 ./src/js/app.js 改为 ./src/index.js
  - 因为入口文件在 src/index.js 中
- 将 ./src/index.html 改为 ./public/index.html

2. 开发环境添加 babel-loader

- 将 @babel/preset-env 改为 @babel/preset-react
  - 因为 @babel/preset-env 只能编译普通 ES6 语法，不能编译 react 的 jsx 语法
  - 所以需要引入 @babel/preset-react 来编译 react 的 jsx 语法
- 添加一个插件 @babel/plugin-proposal-class-properties
  - 解决 babel 不识别 state = {} 语法
  ```
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  ```

3. 修改 eslint 配置

- 将 eslint-loader 加上 enforce: 'pre'

  - 因为 webpack 在打包时可能先运行 babel-loader，此时代码被编译了，在运行 eslint-loader，此时检查的语法是编译后的语法就会报错
  - enforce: 'pre' 会强制 eslint-loader 优先执行

- 使用 react-app 推荐规则进行 react 的语法检查
  - 下载 npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x
  - 修改 package.json
    ```
    "eslintConfig":{
      "extends": "react-app"
    }
    ```

4. 修改 html-webpack-plugin

- 将 template: './src/index.html' 改为 template: './public/index.html'

5. 修改扩展名

```
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // 可以省略文件后缀名
  }

  eslint-loader
  babel-loader
    test: /\.(js|jsx)$/
```

### 生产环境

1. 修改 entry 配置

- 将 ./src/js/app.js 改为 ./src/index.js
  - 因为入口文件在 src/index.js 中

2. 修改 html-webpack-plugin

- 将 template: './src/index.html' 改为 template: './public/index.html'

3. 开发环境添加 babel-loader

- 将 @babel/preset-env 改为 @babel/preset-react
  - 因为 @babel/preset-env 只能编译普通 ES6 语法，不能编译 react 的 jsx 语法
  - 所以需要引入 @babel/preset-react 来编译 react 的 jsx 语法
- 添加一个插件 @babel/plugin-proposal-class-properties
  - 解决 babel 不识别 state = {} 语法
  ```
    plugins: [
      "@babel/plugin-proposal-class-properties"
    ]
  ```

4. 所有输出路径都加上 static

- 例如：js/[contenthash:10].js 改为 static/js/[contenthash:10].js

5. 修改扩展名

```
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // 可以省略文件后缀名
  }

  eslint-loader
  babel-loader
    test: /\.(js|jsx)$/
```
