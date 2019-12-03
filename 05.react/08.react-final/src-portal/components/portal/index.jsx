import { Component } from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

export default class Portal extends Component {
  constructor() {
    super();
    this.el = document.createElement("div");
  }

  componentDidMount() {
    // 将this.el渲染到root上
    root.appendChild(this.el);
  }

  componentWillUnmount() {
    root.removeChild(this.el);
  }

  render() {
    // 将this.props.children渲染到this.el上
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
