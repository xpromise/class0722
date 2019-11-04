function Event(){
  /*
    初始化一个用来存储 事件名+事件回调函数 的对象
    {
      aaa: [callback1, callback2...],
      bbb: [callback1, callback2...],
    }
   */
  this.callbacks = {};
}
// 绑定持久事件：将事件名+事件回调函数添加到callbacks中
Event.prototype.on = function (eventName, callback) {
  if (!this.callbacks[eventName]) {
    // 说明是第一次添加
    this.callbacks[eventName] = [];
  }
  this.callbacks[eventName].push(callback);
};
// 绑定一次性事件
Event.prototype.once = function (eventName, callback) {
  if (!this.callbacks[eventName]) {
    // 说明是第一次添加
    this.callbacks[eventName] = [];
  }
  // 定义新函数
  const newFn = () => {
    // 调用原函数
    callback();
    // 解绑事件
    this.off(eventName, newFn);
  };

  this.callbacks[eventName].push(newFn);
};
// 触发事件
Event.prototype.emit = function (eventName) {
  this.callbacks[eventName].forEach((callback) => callback());
};
// 解绑事件：将callbacks中对应事件名的回调函数删除掉
Event.prototype.off = function (eventName, callback) {
  if (!this.callbacks[eventName]) return;
  // 找到对应事件名的回调函数的下标
  const index = this.callbacks[eventName].findIndex((item) => item === callback);
  // 删除掉
  this.callbacks[eventName].splice(index, 1);
};

const event = new Event();
event.on('aaa', function () {
  console.log(111);
});
const fn = function () {
  console.log(222);
};
event.on('aaa', fn);
event.once('aaa', function () {
  console.log(333);
});

event.emit('aaa'); // 111 222 333
event.emit('aaa'); // 111 222
event.off('aaa', fn);
event.emit('aaa'); // 111