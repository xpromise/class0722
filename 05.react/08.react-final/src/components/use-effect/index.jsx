import React, { useState, useEffect } from "react";

export default function UseEffect() {
  const [num, setNum] = useState(1);
  const [value, setValue] = useState(1);

  const handleClick = () => {
    setNum(num + 1);
  };

  const change = () => {
    setValue(value + num);
  };

  // useEffect第一个参数：相当于componentDidMount 和 ComponentDidUpdate
  useEffect(() => {
    // 因为 相当于componentDidMount 和 ComponentDidUpdate
    // 第一次初始化渲染 只会触发 111
    console.log("useEffect触发了111~");

    return () => {
      // 第二次更新时 会先触发 222 再触发 111
      // 在这里清除上一次的请求、解绑事件等
      console.log("useEffect触发了222~");
    };
    // useEffect第二个参数：相当于shouldComponentUpdate
    // 如果num值没变，页面就不会重新渲染
  }, [num]);

  return (
    <div>
      <h1>useEffect</h1>
      <p>click {num}</p>
      <button onClick={handleClick}>increment</button>
      <button onClick={change}>change</button>
    </div>
  );
}
