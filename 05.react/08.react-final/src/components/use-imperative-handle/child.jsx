import React, { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef((props, ref) => {
  const inputRef = useRef();
  const btnRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        inputRef,
        btnRef
      };
    },
    []
  );

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button ref={btnRef}>按钮</button>
    </div>
  );
});
