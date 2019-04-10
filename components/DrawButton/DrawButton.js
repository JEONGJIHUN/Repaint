import React from "react";
import "./DrawButton.less";

const DrawButton = ({ iconName, color }) => {
  return (
    <div className="DrawButton" style={{ backgroundColor: `${color}` }}>
      {iconName}
    </div>
  );
};

export default DrawButton;
