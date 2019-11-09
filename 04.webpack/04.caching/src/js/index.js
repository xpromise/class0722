/*
  tree shaking 树摇
    作用：用来去除未经引用的代码
    配置：
      1. 模块化采用ES6模块化
      2. 将mode=production就行
    问题：会把样式给干掉
    解决：在package.json中加上    "sideEffects": ["*.css"],  // 将css资源标记成不要进行tree shaking的资源
*/
import {
  showMsg
} from './module1';

import '../css/test1.css';

showMsg();