import React from "react";
import "./Dialog.less";

const Dialog = ({ title, titleSize }) => {
  return (
    <div className="Dialog">
      <div className="titleContainer" style={{ fontSize: titleSize }}>
        {title}
      </div>
      <div className="contextContainer" />
    </div>
  );
};

export default Dialog;
