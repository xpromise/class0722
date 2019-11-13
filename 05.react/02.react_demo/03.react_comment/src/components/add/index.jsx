import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Add extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired
  };

  state = {
    name: "",
    content: ""
  };

  handleChange = key => {
    return event => {
      this.setState({
        [key]: event.target.value.trim()
      });
    };
  };

  addComment = e => {
    // 禁止表单的默认行为
    e.preventDefault();

    // 收集表单数据
    const { name, content } = this.state;

    if (name && content) {
      // 添加评论
      this.props.add({ name, content });
      // 清空数据
      this.setState({
        name: "",
        content: ""
      });
    }
  };

  render() {
    const { name, content } = this.state;
    console.log("add render()");

    return (
      <div className="col-md-4">
        <form className="form-horizontal" onSubmit={this.addComment}>
          <div className="form-group">
            <label>用户名</label>
            <input
              type="text"
              className="form-control"
              placeholder="用户名"
              onChange={this.handleChange("name")}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea
              className="form-control"
              rows="6"
              placeholder="评论内容"
              onChange={this.handleChange("content")}
              value={content}
            />
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default pull-right">
                提交
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
