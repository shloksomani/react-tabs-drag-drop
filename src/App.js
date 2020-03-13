import Demo from "./Demo";

import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    content: ["demo1", "demo2"]
  };

  handelContent = data => {
    this.setState({ content: [...this.state.content, data] });
  };
  render() {
    return (
      <div className="App">
        <div className="Page1">
          {this.state.content.map((item, i) => (
            <p key={i}>{this.state.content[i]}</p>
          ))}
        </div>
        <Demo
          currentContent={this.state.content}
          handelContentProp={this.handelContent}
        />
      </div>
    );
  }
}
