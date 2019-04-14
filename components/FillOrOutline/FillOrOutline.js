import React, { Component } from "react";
import "./FillOrOutline.less";

class FillOrOutline extends Component {
  render() {
    const { text } = this.props;
    return <div className="FillOrOutline">{text}</div>;
  }
}

export default FillOrOutline;
