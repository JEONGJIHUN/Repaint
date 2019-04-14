import React, { Component } from "react";
import "./Dialog.less";

class Dialog extends Component {
  render() {
    const { title, titleSize, position, size } = this.props;
    return (
      <div
        className="Dialog"
        style={{
          top: `${position[0]}px`,
          right: `${position[1]}px`,
          bottom: `${position[2]}px`,
          left: `${position[3]}px`,
          width: `${size[0]}px`,
          height: `${size[1]}px`
        }}
      >
        <div
          className="titleContainer"
          style={{
            fontSize: titleSize
          }}
        >
          {title}
        </div>
        <div className="contextContainer" />
      </div>
    );
  }
}

export default Dialog;
