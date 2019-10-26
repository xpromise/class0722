/*
  nodejs每一个模块都包裹了一层看不见的函数。
    function (exports, require, module, __filename, __dirname) {}
      exports  暴露
      require  引入
      module   module.exports 暴露
      __filename 当前文件的绝对路径
      __dirname 当前文件夹的绝对路径
 */

console.log(arguments.callee.toString()); // 实参列表

console.log(__filename); // C:\Users\XiongJian\Desktop\class0722\class0722\day01\03.node function.js
console.log(__dirname); // C:\Users\XiongJian\Desktop\class0722\class0722\day01