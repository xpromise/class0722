import React, { Component } from "react";

import withHoc from "../with-hoc";

// 简化高阶组件的写法
@withHoc("login")
class Login extends Component {
  render() {
    const { username, password } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <h1>登录</h1>
        用户名:
        <input
          type="text"
          onChange={this.props.handleChange("username")}
          value={username}
        />
        <br />
        密码:
        <input
          type="password"
          onChange={this.props.handleChange("password")}
          value={password}
        />
        <br />
        <input type="submit" value="登录" />
      </form>
    );
  }
}

export default Login;
