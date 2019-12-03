import React, { Component, PureComponent, Fragment } from "react";

/*
  // 检查组件是否需要更新
  function checkShouldComponentUpdate(workInProgress, ctor, oldProps, newProps, oldState, newState, nextContext) {
    // instance就是组件实例对象
    var instance = workInProgress.stateNode;
    // 检查组件是否定义了shouldComponentUpdate生命周期函数
    if (typeof instance.shouldComponentUpdate === 'function') {
      startPhaseTimer(workInProgress, 'shouldComponentUpdate');
      var shouldUpdate = instance.shouldComponentUpdate(newProps, newState, nextContext);
      stopPhaseTimer();

      {
        !(shouldUpdate !== undefined) ? warningWithoutStack$1(false, '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', getComponentName(ctor) || 'Component') : void 0;
      }

      return shouldUpdate;
    }

    // ctor.prototype.isPureReactComponent返回值是true，说明组件继承了PureComponent
    if (ctor.prototype && ctor.prototype.isPureReactComponent) {
      return !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
    }

    return true;
  }



  function is(x, y) {
    return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
    ;
  }

// 判断两个值是否相等
// 1. 解决NaN 和 NaN不相等 --> 相等    2. 解决 0 和 -0 相等问题 --> 不相等
var is$1 = typeof Object.is === 'function' ? Object.is : is;

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

function shallowEqual(objA, objB) {
  // 判断 a和b是否相等
  if (is$1(objA, objB)) {
    // 两个值相等，不更新
    return true;
  }

  // 说明a和b不相等
  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    // 如果a和b不是引用数据类型，并且不相等 --> 更新
    return false;
  }

  // 说明a和b不相等并且 a和b都是引用数据类型
  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    // 更新
    return false;
  } // Test for A's keys different from B.


  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$2.call(objB, keysA[i]) || !is$1(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

性能优化方案：
  PureComponent --> 内部实现了浅比较。如果数据结构较深，不建议使用, 如果数据结构较浅，只有一层。建议使用
    （只要保证更新时不修改原数据，产生一份新数据，就可以用PureComponent）--> immutable-js (保证数据不可变，一定是全新的)
  shouldComponentUpdate  --> 优先级更高,   如果数据结构较深， 建议使用
*/

export default class App extends PureComponent {
  state = {
    num: 1,
    arr: [{ a: 1 }]
  };

  /* shouldComponentUpdate(nextProps, nextState) {
    const nextKeys = Object.keys(nextState);
    const prevKeys = Object.keys(this.state);

    if (nextKeys.length !== prevKeys.length) {
      return true;
    }

    for (let index = 0; index < nextKeys.length; index++) {
      const key = nextKeys[index];
      // hasOwnProperty 检查对象是否有某个属性
      if (
        !Object.prototype.hasOwnProperty.call(this.state, key) ||
        nextState[key] !== this.state[key]
      ) {
        return true;
      }
    }

    return false;
  } */

  componentDidMount() {
    setInterval(() => {
      this.setState({});
    }, 1000);
  }

  render() {
    console.log(111);

    return <Fragment>App.......</Fragment>;
  }
}
