/*
  用来创建store的模块。
  store对象就有读取/更新状态方法
    store.getState()
    store.dispatch(action)
    store.subscribe(listener)
*/
import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import {
  composeWithDevTools
} from 'redux-devtools-extension';

import reducers from './reducers';
// 创建store
let store = null;
// 区分开发环境和生产环境
if (process.env.NODE_ENV === 'development') {
  store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}
// 暴露出去
export default store;