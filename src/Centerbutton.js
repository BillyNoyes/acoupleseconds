import React from "react";
import "./index.css";
import { Timer } from "./Timer";
import wrapCustomElement from "@shoelace-style/react-wrapper";

class Repetitions extends React.Component {
  render() {
    const ShoelaceButton = wrapCustomElement("sl-button");
    const ShoelaceIcon = wrapCustomElement("alarm");
    return (
      <sl-button
        type="default"
        size="large"
        circle
        onClick={this.props.startTimer}
      >
        <sl-icon name="alarm"></sl-icon>
      </sl-button>
    );
  }
}

export default Repetitions;
