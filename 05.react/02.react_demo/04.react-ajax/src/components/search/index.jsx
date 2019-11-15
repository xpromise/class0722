import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  state = {
    searchName: ""
  };

  handleChange = e => {
    this.setState({
      searchName: e.target.value.trim()
    });
  };

  search = () => {
    const { searchName } = this.state;
    if (!searchName) return;
    // 发布消息
    PubSub.publish("UPDATE_SEARCH_NAME", searchName);
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            type="text"
            placeholder="enter the name you search"
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
