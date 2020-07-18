import React from "react";
import "./index.css";
import { lightTheme } from "./theme";
import { darkTheme } from "./theme";
import wrapCustomElement from "@shoelace-style/react-wrapper";

class Themechanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: true };

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({ display: !this.state.display });
  }
  render() {
    const ShoelaceSwitch = wrapCustomElement("sl-switch");
    const ShoelaceIcon = wrapCustomElement("sl-icon");
    const ShoelaceButton = wrapCustomElement("sl-button");
    if (this.state.display) {
      return (
        <body style={lightTheme}>
          <sl-button
            type="default"
            size="small"
            circle
            onClick={this.toggleDisplay}
          >
            <sl-icon name="circle-half"></sl-icon>
          </sl-button>
        </body>
      );
    } else {
      return (
        <body style={darkTheme}>
          <sl-button
            type="default"
            size="small"
            circle
            onClick={this.toggleDisplay}
          >
            <sl-icon name="circle-half"></sl-icon>
          </sl-button>
        </body>
      );
    }
  }
}

export default Themechanger;
