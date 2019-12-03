import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Portal from "../portal";
import "./index.css";

export default class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string
  };

  render() {
    const { visible, onOk, onCancel, title, children } = this.props;

    return (
      <CSSTransition
        in={visible}
        timeout={1000}
        classNames="x-modal"
        unmountOnExit
      >
        <Portal>
          <div className="x-modal">
            <div className="x-modal-wrap">
              <div className="x-modal-header">
                <div className="x-modal-title">{title}</div>
                <button className="x-modal-close" onClick={onCancel}>
                  X
                </button>
              </div>
              <div className="x-modal-body">{children}</div>
              <div className="x-modal-footer">
                <button className="x-modal-btn" onClick={onCancel}>
                  取消
                </button>
                <button className="x-modal-btn x-btn-primary" onClick={onOk}>
                  确认
                </button>
              </div>
            </div>
            <div className="x-modal-mask"></div>
          </div>
        </Portal>
      </CSSTransition>
    );
  }
}
