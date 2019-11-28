import React, { Component, Fragment } from "react";

import A from "./components/a";
import ErrorBoundary from "./components/error-boundary";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>App...</h1>
        <ErrorBoundary>
          <A />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
