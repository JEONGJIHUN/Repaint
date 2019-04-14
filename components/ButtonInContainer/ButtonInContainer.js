import React, { Component } from "react";
import "./ButtonInContainer.less";

class ButtonInContainer extends Component {
  render() {
    const { text } = this.props;
    return <div className="ButtonInContainer">{text}</div>;
  }
}

export default ButtonInContainer;
