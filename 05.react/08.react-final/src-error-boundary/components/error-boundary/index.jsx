import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false
  };
  /*
    这两个都是生命周期函数：一般不触发
    一旦后代组件生命周期函数中出错，才触发

    只能在生产环境生效
  */
  static getDerivedStateFromError(error) {
    // 返回一个新状态
    return {
      hasError: true
    };
  }

  componentDidCatch(info, error) {
    // 收集错误信息，发送到后台去
    console.log(info, error);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return <div>哇哦，页面崩溃了，请联系管理员~</div>;
    }

    return this.props.children;
  }
}
