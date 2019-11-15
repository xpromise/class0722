import React, { Component } from "react";

import Search from "./components/search";
import List from "./components/list";

import "./index.css";

export default class App extends Component {
  state = {
    searchName: ""
  };

  updateSearchName = searchName => {
    this.setState({
      searchName
    });
  };

  render() {
    console.log("app render");

    return (
      <div className="container">
        <Search updateSearchName={this.updateSearchName} />
        <List searchName={this.state.searchName} />
      </div>
    );
  }
}
