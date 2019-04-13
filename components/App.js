import React from "react";
import RoundOfLegend from "./RoundOfLegend/RoundOfLegend";
import Dialog from "./Dialog/Dialog";
import CategoryButton from "./CategoryButton/CategoryButton";
import ButtonInContainer from "./ButtonInContainer/ButtonInContainer";
import DrawButton from "./DrawButton/DrawButton";
import FillOrOutline from "./FillOrOutline/FillOrOutline";
import { NaverMap } from "react-naver-maps";
import "./App.less";

const App = () => {
  return (
    <div>
      <NaverMap style={{ height: "100vh", overflow: "hidden" }} />
      <RoundOfLegend color={"red"} size={20} />
      <Dialog title={"jihune"} titleSize={30} />
      <CategoryButton color={"yellow"} text={"재개발"} />
      <ButtonInContainer text={"내 호재"} />
      <DrawButton iconName={"A"} color={"red"} />
      <FillOrOutline text={"Fill"} />
    </div>
  );
};

export default App;
