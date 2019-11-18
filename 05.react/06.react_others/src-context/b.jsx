import React, { Component } from "react";

import personContext from "./context/person";

// import aaaContext from "./context/aaa";

// 如果组件需要接受多个context
/* export default class B extends Component {
  render() {
    return (
      <div>
        B...........
        <aaaContext.Consumer>
          {
            aaa => {
              return <personContext.Consumer>
              {// person就是context管理的状态数据
              person => {
                // 要渲染的内容
                return (
                  <ul>
                    <li>姓名: {person.name}</li>
                    <li>年龄: {person.age}</li>
                  </ul>
                );
              }}
            </personContext.Consumer>
            }
          }
        </aaaContext.Consumer>
        
      </div>
    );
  }
} */

// 组件只接受一个context
export default class B extends Component {
  static contextType = personContext;

  render() {
    const person = this.context;

    return (
      <div>
        B...........
        <ul>
          <li>姓名: {person.name}</li>
          <li>年龄: {person.age}</li>
        </ul>
      </div>
    );
  }
}
