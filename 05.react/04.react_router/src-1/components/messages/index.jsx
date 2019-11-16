import React, { Component } from "react";

import { Link, Route } from "react-router-dom";
import Detail from "../detail";

export default class Messages extends Component {
  state = {
    isLoading: false,
    data: []
  };

  componentDidMount() {
    this.setState({
      isLoading: true
    });
    // 模拟请求数据
    setTimeout(() => {
      this.setState({
        isLoading: false,
        data: [
          { id: 1, content: "message001" },
          { id: 3, content: "message003" },
          { id: 5, content: "message005" }
        ]
      });
    }, 1000);
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) return <h1>loading...</h1>;

    return (
      <div>
        Messages组件内容
        <ul>
          {data.map(item => {
            return (
              <li key={item.id}>
                <Link to={`/home/message/${item.id}`}>{item.content}</Link>
              </li>
            );
          })}
        </ul>
        <Route path="/home/message/:id" component={Detail} />
      </div>
    );
  }
}
