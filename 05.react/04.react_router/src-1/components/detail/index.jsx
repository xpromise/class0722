import React, { Component } from "react";

export default class Detail extends Component {
  state = {
    data: [
      { id: 1, content: "message001", detail: "message001 detail~~~" },
      { id: 3, content: "message003", detail: "message003 detail~~~" },
      { id: 5, content: "message005", detail: "message005 detail~~~" }
    ]
  };

  render() {
    const id = +this.props.match.params.id;
    const message = this.state.data.find(item => item.id === id);
    return (
      <ul>
        <li>id: {message.id}</li>
        <li>content: {message.content}</li>
        <li>detail: {message.detail}</li>
      </ul>
    );
  }
}
