import React, { Component } from "react";

import store from "./redux/store";
import { increment, decrement } from "./redux/action-creators";

export default class App extends Component {
  state = {
    value: 1
  };

  handleChange = e => {
    this.setState({
      value: +e.target.value
    });
  };

  increment = () => {
    // 1. 调用action creators生成action对象
    const action = increment(this.state.value);
    // 2. 调用store.dispatch(action) 触发更新
    store.dispatch(action);
  };

  decrement = () => {
    // 1. 调用action creators生成action对象
    const action = decrement(this.state.value);
    // 2. 调用store.dispatch(action) 触发更新
    store.dispatch(action);
  };

  incrementIfOdd = () => {
    const number = store.getState();
    if ((number & 1) === 1) {
      // if (number % 2 === 1) {
      // 1. 调用action creators生成action对象
      const action = increment(this.state.value);
      // 2. 调用store.dispatch(action) 触发更新
      store.dispatch(action);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      // 1. 调用action creators生成action对象
      const action = increment(this.state.value);
      // 2. 调用store.dispatch(action) 触发更新
      store.dispatch(action);
    }, 1000);
  };

  render() {
    // 从redux中读取状态数据
    // redux一上来默认会调用一次reducers函数 (undefined, {type: "@@redux/INITd.q.i.u.x"})
    // 调用reducer函数的返回值，就是store对象管理的状态的初始化值
    const number = store.getState();

    // console.log(number);

    return (
      <div>
        <p>click {number} times</p>
        <select onChange={this.handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementIfOdd}>increment if odd</button>
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}
