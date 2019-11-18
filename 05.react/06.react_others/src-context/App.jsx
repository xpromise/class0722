import React, { Component } from "react";

import A from "./a";
import personContext from "./context/person";

export default class App extends Component {
  state = {
    person: {
      name: "damu",
      age: 30
    }
  };

  render() {
    return (
      <div>
        App..........
        {/* value就是context管理的状态数据 */}
        <personContext.Provider value={this.state.person}>
          <A />
        </personContext.Provider>
      </div>
    );
  }
}
