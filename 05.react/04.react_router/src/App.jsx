import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import routes from "./config/routes";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        {routes.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} />;
        })}
      </Router>
    );
  }
}
