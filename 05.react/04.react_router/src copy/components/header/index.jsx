import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./index.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <ul className="list">
          <li>
            <NavLink to="/home">首页</NavLink>
          </li>
          <li>
            <NavLink to="/pins">沸点</NavLink>
          </li>
          <li>
            <NavLink to="/topic">话题</NavLink>
          </li>
          <li>
            <NavLink to="/books">小册</NavLink>
          </li>
          <li>
            <NavLink to="/events">活动</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}
