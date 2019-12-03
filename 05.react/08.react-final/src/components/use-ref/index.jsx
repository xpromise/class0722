import React, { useRef } from "react";

export default function UseRef() {
  // ref用法：特点就是能保证前后ref是同一个引用，不会创建新的
  const ref = useRef("aaa");

  const handleClick = () => {
    console.log(ref);
  };

  return (
    <div>
      <h1 ref={ref}>useCallback</h1>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
