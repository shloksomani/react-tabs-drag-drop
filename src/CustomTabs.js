// import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Drag from "./Drag";
import Drop from "./Drop";
import uuid from "uuid/v4";
import ReactDOM from "react-dom";

function TabContainer(props) {
  // console.log(props);
  // var node = ReactDOM.findDOMNode(props);
  // console.log(node);
  return <Typography id="data">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default class CustomTabs extends Component {
  state = {
    value: 0,
    list: []
  };

  element = (
    <svg height="100" width="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="3"
        fill="red"
      />
      Sorry, your browser does not support inline SVG.{" "}
    </svg>
  );

  list1 = {
    name: "shlok"
  };

  list2 = {
    name: "Demo2"
  };

  list3 = {
    name: "Demo3"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper square>
        <Tabs
          value={this.state.value}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleChange}
          aria-label="tabs"
        >
          <Tab label="Tab1" />
          <Tab label="Tab2" />
          <Tab label="Tab3" />
        </Tabs>

        {value === 0 && (
          <Drag id={uuid()}>
            <TabContainer>{this.list1.name}</TabContainer>
          </Drag>
        )}
        {value === 1 && (
          <Drag id={uuid()}>
            <TabContainer>{this.list2.name}</TabContainer>
          </Drag>
        )}
        {value === 2 && (
          <Drag id={uuid()}>
            <TabContainer>{this.list3.name}</TabContainer>
          </Drag>
        )}
      </Paper>
    );
  }
}
