import React from "react";
import "./index.css";
import Themechanger from "./Themechanger";
import Repetitions from "./Repetitions";
import Timer from "./Timer";
import Centerbutton from "./Centerbutton";

class App extends React.Component {
  render() {
    return (
      <body>
        {/* <Themechanger /> */}
        {/* <Repetitions /> */}
        <Centerbutton />
        <Timer />
      </body>
    );
  }
}

export default App;
