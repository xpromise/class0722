import React, { Component } from "react";
import Modal from "./components/modal";

export default class App extends Component {
  state = {
    visible: false
  };

  ok = () => {
    console.log("okokok");
  };

  cancel = () => {
    this.setState({
      visible: false
    });
  };

  show = () => {
    this.setState({
      visible: true
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.show}>点击显示modal</button>

        <Modal
          title="添加分类"
          visible={this.state.visible}
          onOk={this.ok}
          onCancel={this.cancel}
        >
          <p>这是内容~~~</p>
        </Modal>
      </div>
    );
  }
}
