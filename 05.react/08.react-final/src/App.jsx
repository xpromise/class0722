import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

import routes from "./config";

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          {routes.map((route, index) => {
            return (
              <li key={index}>
                <NavLink to={route.path}>{route.title}</NavLink>
              </li>
            );
          })}
        </ul>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}
