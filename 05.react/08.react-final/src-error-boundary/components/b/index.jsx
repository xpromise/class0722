import React, { Component } from "react";

export default class B extends Component {
  render() {
    const a = function () {};
    a()();

    return <div>B............</div>;
  }
}
