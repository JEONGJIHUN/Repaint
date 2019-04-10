import React from "react";
import "./CategoryButton.less";
import RoundOfLegend from "../RoundOfLegend/RoundOfLegend";

const CategoryButton = ({ color, text }) => {
  return (
    <div className="CategoryButton">
      <div className="RoundOfLegendContainer">
        <RoundOfLegend color={color} size={10} />
      </div>
      <div className="textContainer">{text}</div>
    </div>
  );
};

export default CategoryButton;
