import React, { Component } from "react";
import PropTypes from "prop-types";

import Item from "../item";

export default class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    del: PropTypes.func.isRequired
  };

  render() {
    // 接受props
    const { comments, del } = this.props;
    console.log('list render()');

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        {/* 默认情况下样式通过className，当样式是通过js控制的，一般会用style */}
        <h2 style={{ display: comments.length ? "none" : "block" }}>
          暂无评论，点击左侧添加评论！！！
        </h2>
        <ul className="list-group">
          {comments.map((comment, index) => (
            <Item comment={comment} key={comment.id} del={del} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}
