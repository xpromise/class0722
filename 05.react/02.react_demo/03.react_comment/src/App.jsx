import React, { Component } from 'react';

import Add from './components/add';
import List from './components/list';

import './index.css';

export default class App extends Component {
  // 初始化状态数据
  state = {
    comments: [
      { name: 'damu', content: '幻影坦克~~' },
      { name: 'laofu', content: '你看到我的鸟吗' },
    ],
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add />
          <List comments={comments} />
        </div>
      </div>
    );
  }
}
