/*
  用来创建store的模块。
  store对象就有读取/更新状态方法
    store.getState()
    store.dispatch(action)
    store.subscribe(listener)
*/
import {
  createStore
} from 'redux';
import reducers from './reducers';
// 创建store
const store = createStore(reducers);
// 暴露出去
export default store;