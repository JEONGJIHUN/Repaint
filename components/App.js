import React, { Component } from "react";
import Dialog from "./Dialog/Dialog";
// import RoundOfLegend from "./RoundOfLegend/RoundOfLegend";
// import CategoryButton from "./CategoryButton/CategoryButton";
// import ButtonInContainer from "./ButtonInContainer/ButtonInContainer";
// import DrawButton from "./DrawButton/DrawButton";
// import FillOrOutline from "./FillOrOutline/FillOrOutline";
import TotalContainer from "./TotalContainer/TotalContainer";
import { NaverMap } from "react-naver-maps";
import "./App.less";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <NaverMap style={{ height: "100vh", overflow: "hidden" }} />
        <TotalContainer />
        <Dialog
          title={"주변 호재"}
          titleSize={20}
          position={[15, 0, 0, 15]}
          size={[400, 300]}
        />
        {/*<RoundOfLegend color={"red"} size={20} />
        <CategoryButton color={"yellow"} text={"재개발"} />
        <ButtonInContainer text={"내 호재"} />
        <DrawButton iconName={"A"} color={"red"} />
        <FillOrOutline text={"Fill"} />*/}
      </div>
    );
  }
}

export default App;
