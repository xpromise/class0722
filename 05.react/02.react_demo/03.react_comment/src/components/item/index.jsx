import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Item extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  }

  render() {
    const { name, content } = this.props.comment;

    return (
      <li className="list-group-item">
        <div className="handle">
          <button className="del-btn">删除</button>
        </div>
        <p className="user">
          <span>{name}</span>
          <span>说:</span>
        </p>
        <p className="centence">{content}</p>
      </li>
    );
  }
}
