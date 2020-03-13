// import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

function TabContainer(props) {
  // console.log(props);
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}

      <button onClick={() => props.handelClick(props.children)}>
        Add to the list
      </button>
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default class Demo extends Component {
  state = {
    value: 0
  };

  list1 = {
    name: "shlok"
  };

  list2 = {
    name: "sakshi"
  };

  list3 = {
    name: "ishita"
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
          aria-label="disabled tabs example"
        >
          <Tab label="Active" />
          <Tab label="Active" />
          <Tab label="Active" />
        </Tabs>

        {value === 0 && (
          <TabContainer handelClick={this.props.handelContentProp}>
            {this.list1.name}
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer handelClick={this.props.handelContentProp}>
            {this.list2.name}
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer handelClick={this.props.handelContentProp}>
            {this.list3.name}
          </TabContainer>
        )}
      </Paper>
    );
  }
}
