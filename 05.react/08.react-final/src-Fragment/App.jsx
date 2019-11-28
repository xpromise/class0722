import React, { Component, Fragment } from "react";
/*
  Fragment 用来充当根标签
  特点：渲染时不会渲染任何元素
*/
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Fragment</h1>
        <p>这是一段文本~</p>
      </Fragment>
    );
  }
}
