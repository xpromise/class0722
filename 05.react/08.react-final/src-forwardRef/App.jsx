import React, { Component } from "react";

import A from "./components/a";
import B from "./components/b";
import C from "./components/c";

export default class App extends Component {
  h1Ref = React.createRef();
  aRef = React.createRef();
  bRef = React.createRef();
  cRef = React.createRef();

  componentDidMount() {
    console.log(this.h1Ref);
    console.log(this.aRef);
    console.log(this.bRef);
    console.log(this.cRef);
  }

  render() {
    /*
      ref：
        给虚拟DOM元素设置ref属性, 获取到真实DOM元素
        给class类组件设置ref属性，获取到组件实例对象
        给function组件设置ref属性，获取到null（拿不到东西）
          如果真要给函数设置ref属性，需要用forwardRef，能获取到函数组件里面的虚拟DOM对象对应的真实DOM元素
    */
    return (
      <div>
        <h1 ref={this.h1Ref}>App.......</h1>
        <A ref={this.aRef} />
        <B ref={this.bRef} />
        <C ref={this.cRef} />
      </div>
    );
  }
}
