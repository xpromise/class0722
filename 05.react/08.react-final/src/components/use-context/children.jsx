import React, { useContext } from "react";
import Context from "./context";

export default function Children() {
  // useContext(Context)相当于 class 组件中的 static contextType = MyContext 或者 <MyContext.Consumer>
  // 返回值就是context管理的数据
  const { num } = useContext(Context);

  return <div>Children...{num}</div>;
}
