import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';

import App from './App';
import store from "./redux/store";

// Provider组件给里面组件传递store对象
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));