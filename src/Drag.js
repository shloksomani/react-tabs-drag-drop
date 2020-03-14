import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Drop extends Component {
  drag = e => {
    e.dataTransfer.setData("transfer", e.target.id);
  };

  notAllow = e => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        id={this.props.id}
        draggable="true"
        onDragStart={this.drag}
        onDragOver={this.notAllow}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
Drop.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
};
