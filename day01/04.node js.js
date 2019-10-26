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

    异步代码执行顺序：
      js引擎对异步代码优先级进行划分：宏任务、微任务。 简单理解：微任务优先级高，宏任务优先级低
        先执行微任务，执行完所有微任务，再检查宏任务执行。当执行完一个宏任务。继续检查微任务，如果有就执行，没有就执行下一个宏任务

        微任务：
          process.nextTick  只有nodejs有
          queueMicrotask
          promise.then().catch().finally()

          微任务优先级：process.nextTick优先级最高 ，其他微任务按顺序执行
        宏任务:
          setTimeout
          setInterval
          setImmediate
          requestAnimationFrame

          宏任务优先级：看nodejs事件轮询机制。
            timers 定时器节点：定时器队列，里面有定时器的回调函数
            pending callbacks
            idle, prepare
            poll 轮询阶段：轮询队列，里面有I/O操作的回调函数
              首先依次执行轮询队列中的回调函数。直到全部执行完毕
              轮询队列为空：
                1. 之前有没有设置过setImmediate函数
                2. 定时器有没有到点
                满足以上两个条件之一，就会去下一个check阶段。
                不满足条件，就会在当前阶段一直停留，不去下一个阶段了。
            check 检测阶段：检测队列，里面有setImmediate回调函数
            close callbacks
 */

// console.log(global);

setImmediate(() => {
  console.log('setImmediate');
});

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('then1');
});

queueMicrotask(() => {
  console.log('queueMicrotask');
});


Promise.resolve().then(() => {
  console.log('then2');
});

process.nextTick(() => {
  console.log('process.nextTick');
});