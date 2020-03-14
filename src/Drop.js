import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

export default class Drop extends Component {
  drop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    let k = document.getElementById(data);
    console.log(k instanceof HTMLElement);

    var nodeCopy = k.cloneNode(true);
    nodeCopy.setAttribute = ("id", uuid()); /* We cannot use the same ID */
    // e.target.appendChild(nodeCopy);

    console.log(nodeCopy);
    console.log(e.target);

    var link = document.createElement("p");
    link.className = "link";
    link.appendChild(nodeCopy);
    link.children[0].draggable = false;
    console.log(link.children[0].draggable);
    e.target.appendChild(link);

    // e.target.appendChild(document.getElementById(nodeCopy));
  };

  allowDrop = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.allowDrop}
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
