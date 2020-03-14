import CustomTabs from "./CustomTabs";
import Drop from "./Drop";

import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Drop id="dropZone"></Drop>
        <CustomTabs />
      </div>
    );
  }
}
