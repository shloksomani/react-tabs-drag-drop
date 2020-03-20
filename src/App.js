import CustomTabs from "./CustomTabs";
import Drop from "./Drop";
import Drag from "./Drag";

import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    items: {}
  };

  render() {
    return (
      <div className="App">
        <Drop id="dropZone">
          <Drag id="dropDragZone"></Drag>
        </Drop>
        <CustomTabs />
      </div>
    );
  }
}
