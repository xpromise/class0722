import React, { useState, useLayoutEffect, useEffect } from "react";

export default function UseLayoutEffect() {
  const [color, setColor] = useState("red");

  // 在layout（布局/重排）之后，在paint（重绘）之前触发
  useLayoutEffect(() => {
    alert(111);
  });

  // 在layout（布局/重排）和paint（重绘）之后触发
  useEffect(() => {
    alert(222);
  });

  const handleClick = () => {
    setColor(color === "red" ? "green" : "red");
  };

  return (
    <div>
      <div style={{ width: 100, height: 100, backgroundColor: color }}></div>
      <button onClick={handleClick}>按钮</button>
    </div>
  );
}
