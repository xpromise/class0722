import React, { Component } from "react";

import { NavLink, Route, Redirect, Switch } from "react-router-dom";

import News from "../news";
import Messages from "../messages";

export default class Home extends Component {
  render() {
    return (
      <div>
        Home组件内容
        <ul class="nav nav-tabs">
          <li>
            <NavLink to="/home/news" activeClassName="my-active">
              News
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/message" activeClassName="my-active">
              Message
            </NavLink>
          </li>
        </ul>
        {/* 
          当 Redirect 要使用 exact，必须配合Switch才能生效
        */}
        <Switch>
          <Route path="/home/news" component={News} exact />
          <Route path="/home/message" component={Messages} exact />
          <Redirect from="/home" to="/home/news" exact />
        </Switch>
      </div>
    );
  }
}
