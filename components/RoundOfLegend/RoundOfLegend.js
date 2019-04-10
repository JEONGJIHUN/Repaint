import React from "react";
import "./RoundOfLegend.less";

const RoundOfLegend = ({ color, size }) => {
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
};

export default RoundOfLegend;
