/*
  用来action对象的工厂函数模块
    action对象：
      {
        type: 操作类型,
        data: 操作数据
      }
*/

import {
  INCREMENT,
  DECREMENT
} from './action-types';

// 同步操作action-creator：返回值就是action对象
export const increment = (data) => ({
  type: INCREMENT,
  data
});

export const decrement = (data) => ({
  type: DECREMENT,
  data
});

// 异步操作action-creator：返回值就是函数
export const incrementAsync = (data) => {
  return (dispatch) => {
    // 在函数中完成异步操作
    setTimeout(() => {
      // 当异步操作完成，更新redux状态数据
      // 生成action对象
      const action = increment(data);
      // 调用dispatch
      dispatch(action);
    }, 1000)
  }
}