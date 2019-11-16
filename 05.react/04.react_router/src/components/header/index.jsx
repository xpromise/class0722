import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import routes from "../../config/routes";

import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul className="list">
          {routes.map(({ title, path }) => {
            return (
              <li key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      </header>
    );
  }
}
