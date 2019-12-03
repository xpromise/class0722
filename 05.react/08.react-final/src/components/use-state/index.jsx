import React, { useState } from "react";

export default function UseState() {
  // 初始化状态数据
  // num是状态数据，setNum是更新状态数据的方法
  const [num, setNum] = useState(0);
  // value是状态数据，setValue是更新状态数据的方法
  const [value, setValue] = useState(1);

  const change = e => {
    // 更新value状态
    setValue(+e.target.value);
  };

  const handleClick = () => {
    // 更新num状态
    setNum(num + value);
  };

  return (
    <div>
      <h1>useState</h1>
      <p>click {num}</p>
      <select onChange={change}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
