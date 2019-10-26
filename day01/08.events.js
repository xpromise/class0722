const MyEmitter = require('events');
// 继承父类的属性/方法
class MyEvents extends MyEmitter {}
// 自定义事件
const events = new MyEvents();

// 绑定持久事件
events.on('click', function () {
  console.log(111);
});
function click() {
  console.log(222);
}
events.on('click', click);
// 绑定一次性事件
events.once('click', function () {
  console.log(333);
});
// 触发事件
events.emit('click');
// 解绑事件
events.off('click', click);
events.emit('click');

