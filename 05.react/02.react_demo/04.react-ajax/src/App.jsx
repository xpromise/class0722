import React, { Component } from "react";

import Search from "./components/search";
import List from "./components/list";

import "./index.css";

export default function App() {
  return (
    <div className="container">
      <Search />
      <List />
    </div>
  );
}
