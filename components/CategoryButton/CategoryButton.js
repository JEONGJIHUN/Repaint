import React, { Component } from "react";
import "./CategoryButton.less";
import RoundOfLegend from "../RoundOfLegend/RoundOfLegend";

class CategoryButton extends Component {
  render() {
    const { color, text } = this.props;
    return (
      <div className="CategoryButton">
        <div className="RoundOfLegendContainer">
          <RoundOfLegend color={color} size={10} />
        </div>
        <div className="textContainer">{text}</div>
      </div>
    );
  }
}

export default CategoryButton;
