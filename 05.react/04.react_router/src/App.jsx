import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";

import About from "./components/about";
import Home from "./components/home";
import NotFound from "./components/404";

import "./index.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 
                Link 添加浏览历史记录（不会刷新页面、不会发送请求）
                NavLink 选中的多一个 active 的类名
              */}
              <NavLink
                className="list-group-item"
                to="/about"
                activeClassName="my-active"
              >
                About
              </NavLink>
              <NavLink
                className="list-group-item"
                to="/home"
                activeClassName="my-active"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 
                  Switch 切换，里面的路由只会匹配一个
                */}
                <Switch>
                  {/* 
                    当地址变成path， 就会加载/显示component
                  */}
                  <Route path="/about" component={About} exact />
                  {/* 
                    当二级路由在一级路由里面时，一级路由不能写exact属性，这样会导致二级路由永远不生效
                  */}
                  <Route path="/home" component={Home} />
                  {/* 
                    Redirect 默认匹配所有路径，修改浏览器记录
                    
                    from 从哪来（从哪个path过来）
                    to 到哪去（跳转到哪个path去）
                    exact 严格匹配，必须地址一模一样
                    
                    只能匹配 / ，一旦匹配上，就跳转到 /homes
                  */}
                  <Redirect from="/" to="/home" exact />
                  {/* 
                    没有写path 默认匹配所有路径
                  */}
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
