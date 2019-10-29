/*
  函数节流throttle和函数防抖debounce
    作用：减少单位时间内函数调用的次数，让性能更好

    应用：
      节流：滚轮、mousemove事件等
      防抖：输入框
 */

/*
  实现：利用时间戳来实现单位时间内只触发第一次函数调用
 */
function throttle(fn, wait) {
  // 记录上一次调用函数的时间
  let lastTime = 0;
  return function throttled() {
    // 当前将要调用函数的时间
    const nowTime = Date.now();
    if (nowTime - lastTime < wait) return;
    // 调用函数
    fn.apply(this, arguments); // this --> document
    // 同步时间戳
    lastTime = nowTime;
  }
}

function scroll() {

}

const throttled = throttle(scroll, 200);
document.onscroll = throttled;

/*
  this指向：
    1. fn()  this指向window。  在严格模式下，指向undefined
    2. obj1.obj2.fn()  this指向obj2
    3. fn.call/apply/bind(obj) this指向obj
    4. new Fn() this指向产生的实例对象
    5. 回调函数中this:
      定时器回调函数 window
      dom事件回调函数 被绑定事件的dom元素
    6. 箭头函数的this：
      没有自己的this。 离它最近的一层包裹它函数（外层函数）的this
 */


/*
function debounce(fn, wait) {
  let timer = null;
  return function debounced() {
    // console.log(this); // dom元素上
    const that = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(that, args);
    }, wait)
  }
}
*/

function debounce(fn, wait) {
  let timer = null;
  return function debounced() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait)
  }
}
