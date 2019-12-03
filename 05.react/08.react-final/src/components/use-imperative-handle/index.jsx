import React, { useRef } from "react";

import Child from "./child";

export default function UseImperativeHandle() {
  const ref = useRef();

  const handleClick = () => {
    console.log(ref);
  };

  return (
    <div>
      <Child ref={ref} />
      <button onClick={handleClick}>parent按钮</button>
    </div>
  );
}
