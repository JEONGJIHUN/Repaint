import React, { Component } from "react";
import "./DrawButton.less";

class DrawButton extends Component {
  render() {
    const { iconName } = this.props;
    return <div className="DrawButton">{iconName}</div>;
  }
}

export default DrawButton;
