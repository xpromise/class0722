/*
  主组件、根组件
*/
/* import React from 'react';
import {Component} from 'react'; */
// import React, { Component } from 'react';
import React from 'react';

// 引入图片
import logo from './assets/images/1.jpg';
// 引入样式s
import './assets/css/App.css';

// 定义组件
function App() {
  return (
    <div className="box">
      <h1 className="title">hello react</h1>
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}

// 暴露
export default App;
