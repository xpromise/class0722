import React, { Component } from "react";

export default class State extends Component {
  state = {
    num: 0,
    value: 1
  };

  change = e => {
    this.setState({
      value: +e.target.value
    });
  };

  handleClick = () => {
    const { num, value } = this.state;
    this.setState({
      num: num + value
    });
  };

  render() {
    return (
      <div>
        <h1>click {this.state.num}</h1>
        <select onChange={this.change}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}
