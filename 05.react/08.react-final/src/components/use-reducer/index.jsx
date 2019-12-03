import React, { useReducer } from "react";
import reducer from "./redux/reducer";
import { increment, decrement } from "./redux/action-creators";

export default function UseReducer() {
  // useReducer(reducer, initValue);  推荐在组件内初始化redux状态数据 --> initValue
  // 返回值 number是状态数据, dispatch是更新状态数据的方法
  const [number, dispatch] = useReducer(reducer, 1);

  const handleIncrement = () => {
    // 触发更新：调用dispatch函数，传入action对象
    dispatch(increment());
  };

  const handledecrement = () => {
    // 触发更新：调用dispatch函数，传入action对象
    dispatch(decrement());
  };

  return (
    <div>
      <h1>useReducer</h1>
      <p>{number}</p>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handledecrement}>decrement</button>
    </div>
  );
}
