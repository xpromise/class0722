import promise from './module1';
import data from '../json/data.json';
// 引入目的：让webpack打包css资源
// import '../css/test1.css';

//#region 
/*
  1. 下载包
    npm i webpack webpack-cli -g
    npm i webpack webpack-cli -D
  2. 编写代码
  3. 使用webpack编译代码
    webpack ./src/js/app.js -o ./build/js/built.js --mode=development  
      功能：
        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法
        2. 不能将ES6其他语法编译成ES5以下的低级语法
    webpack ./src/js/app.js -o ./build/js/built.js --mode=production  
      功能：
        1. 能将ES6模块化语法编译成浏览器能识别的模块化语法
        2. 不能将ES6其他语法编译成ES5以下的低级语法
        3. 压缩js代码
  4. webpack核心概念
    1. entry 入口文件：指示webpack从哪个文件开始打包
    2. output 输出：指示webpack打包后资源输出到哪里去
    3. loader 加载器：帮助webpack解析非js/json的文件
    4. plugin 插件：执行功能更加强大的任务（执行loader干不了的事）
    5. mode 模式： 
      development
      production
*/
//#endregion

promise
  .then((value) => {
    console.log(value);
  })

console.log(data);