/*
  浏览器js组成：
    DOM: document
    BOM:
      history
      navigator
    ECMAScript
      语法规范

   nodejs的js组成：
    没有DOM。
    基本没有BOM，有少量语法 console.log  / setTimeout / setInterval
    ECMAScript全部实现了

    global是nodejs的全局对象，相当于window
      console
      setInterval
      setTimeout
      queueMicrotask 立即执行异步函数
      setImmediate  立即执行异步函数
      process.nextTick 立即执行异步函数
 */

console.log(global);