import React, { Component } from "react";
import DrawButton from "../DrawButton/DrawButton";
import Dialog from "../Dialog/Dialog";
import * as Constants from "../Constants/Constants";
import "./TotalContainer.less";

class TotalContainer extends Component {
  state = {
    dialogFlag: false
  };
  render() {
    return (
      <div>
        <div className="TotalContainer">
          {Constants.contextInTotalContainer.map(el => {
            return <DrawButton iconName={el} />;
          })}
        </div>
        {Constants.contextInTotalContainer.map(el => {
          return (
            <Dialog
              title={el}
              titleSize={20}
              position={[50, 75]}
              size={[300, 600]}
            />
          );
        })}
      </div>
    );
  }
}

export default TotalContainer;
