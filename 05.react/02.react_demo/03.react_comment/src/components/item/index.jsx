import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.css";

export default class Item extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    del: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  };

  delComment = () => {
    if (window.confirm(`你确认要删除${this.props.comment.name}的评论吗?`)) {
      // 删除评论
      this.props.del(this.props.index);
    }
  };

  render() {
    const { name, content } = this.props.comment;
    console.log('item render()');


    return (
      <li className="list-group-item">
        <div className="handle">
          <button onClick={this.delComment} className="del-btn">
            删除
          </button>
        </div>
        <p className="user">
          <span>{name}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
