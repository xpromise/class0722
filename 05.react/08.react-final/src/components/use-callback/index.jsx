import React, { useState, useCallback } from "react";

export default function UseCallback() {
  const [num, setNum] = useState(0);
  const [value, setValue] = useState(1);

  // 每次重新渲染时都要重新创建函数，但是函数其实内容没变
  /* const change = e => {
    // 更新value状态
    setValue(+e.target.value);
  }; */

  // useCallback可以缓存函数，一旦[]里面没有变化，函数就不变（不会反复重新创建函数）
  const memorizedChange = useCallback(e => setValue(+e.target.value), []);
  const memorizedClick = useCallback(() => {
    // 更新num状态
    setNum(num + value);
  }, [num, value]);

  return (
    <div>
      <h1>useCallback</h1>
      <p>click {num}</p>
      <select onChange={memorizedChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={memorizedClick}>increment</button>
    </div>
  );
}
