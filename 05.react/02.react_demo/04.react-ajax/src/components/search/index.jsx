import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  static propTypes = {
    updateSearchName: PropTypes.func.isRequired
  };

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
    this.props.updateSearchName(searchName);
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 看state变化
    // 如果有state变了，就更新
    // 如果state没变，就不更新
    // console.log(this.state); // 上一次的状态值
    // console.log(nextState); // 当前最新的状态值
    // 提取对象的属性 key
    const keys = Object.keys(this.state);
    for (let index = 0; index < keys.length; index++) {
      const key = keys[index];
      const value = nextState[key];
      if (!value || this.state[key] !== value) {
        // 状态发生了变化
        return true;
      }
    }
    return false;
  }

  render() {
    console.log("search render");

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
