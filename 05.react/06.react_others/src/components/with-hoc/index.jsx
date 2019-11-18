import React, { Component } from "react";

/*
  高阶组件： HOC High-Order-Component
  作用：复用组件代码
  本质上就是一个函数，执行函数传入一个组件，返回值是一个新组件
*/

export default function withHoc(name) {
  return function(WrappedComponent) {
    return class extends Component {
      // 给组件取名称(优先级更高)
      static displayName = `Form(${WrappedComponent.displayName ||
        WrappedComponent.name ||
        "Component"})`;

      state = {
        username: "",
        password: "",
        rePassword: ""
      };

      handleChange = key => {
        return e => {
          this.setState({
            [key]: e.target.value.trim()
          });
        };
      };

      handleSubmit = e => {
        e.preventDefault();
        const { username, password, rePassword } = this.state;

        let content = `用户名: ${username}  密码: ${password}`;
        if (name === "register") {
          content += `  确认密码: ${rePassword}`;
        }
        alert(content);
      };

      render() {
        return (
          <WrappedComponent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.state}
          />
        );
      }
    };
  };
}
