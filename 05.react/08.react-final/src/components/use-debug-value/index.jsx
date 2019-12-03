import React from "react";

import useIncrement from "./myHook";

export default function UseDebugValue() {
  const [value, setValue] = useIncrement(0);

  const handleClick = () => {
    setValue(2);
  };

  return (
    <div>
      <p>{value}</p>
      <button onClick={handleClick}>increment</button>
    </div>
  );
}
