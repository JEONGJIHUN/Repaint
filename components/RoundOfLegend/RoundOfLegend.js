import React, { Component } from "react";
import "./RoundOfLegend.less";

class RoundOfLegend extends Component {
  render() {
    const { color, size } = this.props;
    return (
      <div
        className="RoundOfLegend"
        style={{
          backgroundColor: `${color}`,
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: `${size / 2}px`
        }}
      />
    );
  }
}

export default RoundOfLegend;
