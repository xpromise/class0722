import React, { Component } from "react";

import withHoc from "../with-hoc";

// 装饰器语法
@withHoc("register")
class Register extends Component {
  render() {
    const { username, password, rePassword } = this.props;

    return (
      <form onSubmit={this.props.handleSubmit}>
        <h1>注册</h1>
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
        确认密码:
        <input
          type="password"
          onChange={this.props.handleChange("rePassword")}
          value={rePassword}
        />
        <br />
        <input type="submit" value="登录" />
      </form>
    );
  }
}

export default Register;
