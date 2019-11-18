import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "./redux/action-creators";

// UI组件：没有redux内容
class App extends Component {
  state = {
    value: 1
  };

  handleChange = e => {
    this.setState({
      value: +e.target.value
    });
  };

  increment = () => {
    this.props.increment(this.state.value);
  };

  decrement = () => {
    this.props.decrement(this.state.value);
  };

  incrementIfOdd = () => {
    const number = this.props.number;
    if ((number & 1) === 1) {
      this.props.increment(this.state.value);
    }
  };

  incrementAsync = () => {
    setTimeout(() => {
      this.props.increment(this.state.value);
    }, 1000);
  };

  render() {
    const number = this.props.number;

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

// 容器组件：包含redux内容

// 遍历redux中的状态数据，以props方式传入UI组件
// 作用：将redux管理的状态数据传给UI组件
/* const mapStateToProps = state => {
  // 函数接受一个state参数，state就是redux管理的所有状态数据
  // redux管理状态看reducers中的函数
  return {
    number: state.number
  };
};
 */
// 遍历更新redux数据的方法，以props方式传入UI组件
// 作用：将更新redux管理的状态数据方法传给UI组件
/* const mapDispatchToProps = dispatch => {
  // dispatch就是store.dispatch
  return {
    increment: value => {
      // 创建action对象
      const action = increment(value);
      // 调用dispatch方法
      dispatch(action);
    },
    decrement: value => {
      // 创建action对象
      const action = decrement(value);
      // 调用dispatch方法
      dispatch(action);
    }
  };
}; */

// connect调用两次，第二次传App组件(被包装组件)。 返回值是一个新组件（这个新组件就是容器组件）。
// 新组件就会向被包装组件App传递redux的内容（redux管理的状态数据和更新redux管理的状态数据的方法）
// const NewComponent = connect(mapStateToProps, mapDispatchToProps)(App);

// export default NewComponent;

export default connect(
  // 状态数据
  state => ({ number: state.number }),
  // 更新状态的数据方法
  { increment, decrement }
)(App);
