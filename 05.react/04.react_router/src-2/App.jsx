import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Topic from "./components/topic";
import Pins from "./components/pins";
import Books from "./components/books";
import Events from "./components/events";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/pins" component={Pins} />
        <Route path="/topic" component={Topic} />
        <Route path="/books" component={Books} />
        <Route path="/events" component={Events} />
      </Router>
    );
  }
}
