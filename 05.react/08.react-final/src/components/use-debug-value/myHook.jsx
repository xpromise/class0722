import { useDebugValue, useState } from "react";

export default function useIncrement(defaultValue) {
  useDebugValue("useIncrement");

  const [num, setNum] = useState(defaultValue);

  const increment = value => {
    setNum(num + value);
  };

  return [num, increment];
}
