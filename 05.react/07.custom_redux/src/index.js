import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";

// ReactDOM.render(<App />, document.getElementById('root'));

/* store.subscribe(() => {
  // 一旦store对象的状态发生变化，就会触发当前函数
  // 触发当前函数，重新渲染组件
  // ReactDOM.render(<App />, document.getElementById('root'));
  render();
}) */

store.subscribe(render);

// 初始化渲染
render();
function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}