import React, { useState, useMemo } from "react";
// 斐波那契数列
const fibonacci = num => {
  return num < 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

export default function UseMemo() {
  const [num, setNum] = useState(0);

  const handleChange = e => setNum(e.target.value.trim());
  // 一旦num变化，就进行fibonacci运算得出结果并缓存起来
  // 返回值memorized就是缓存的计算结果
  const memorized = useMemo(() => fibonacci(num), [num]);

  const calc = () => {
    alert(memorized);
  };

  return (
    <div>
      <h1>useMemo</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={calc}>计算结果</button>
    </div>
  );
}
