/*
  用来action对象的工厂函数模块
    action对象：
      {
        type: 操作类型,
        data: 操作数据
      }
*/

import { INCREMENT, DECREMENT } from './action-types';

export const increment = (data) => ({
  type: INCREMENT,
  data
});

export const decrement = (data) => ({
  type: DECREMENT,
  data
});