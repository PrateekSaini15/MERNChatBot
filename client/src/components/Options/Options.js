import React, { Component } from "react";
import "./Options.css";

class Options extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.actionProvider.takeNewOrder}>
          New Order
        </button>
      </div>
    );
  }
}

export default Options;
