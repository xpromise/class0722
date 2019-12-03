import React from "react";
import Context from "./context";
import Children from "./children";

export default function UseContext() {
  return (
    <div>
      <h1>useContext</h1>
      <Context.Provider value={{ num: 1 }}>
        <Children />
      </Context.Provider>
    </div>
  );
}
