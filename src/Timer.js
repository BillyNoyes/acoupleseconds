import React from "react";
import "./index.css";
import Centerbutton from "./Centerbutton";

class Timer extends React.Component {
  state = {
    seconds: 5,
    stage: "breathIn",
    repetition: 4,
  };

  changeSeconds(x) {
    const { y } = this.state;
    this.setState(({ y }) => ({
      seconds: x,
    }));
  }

  changeStage(x) {
    const { y } = this.state;
    this.setState(({ y }) => ({
      stage: x,
    }));
  }

  changeRepetitions() {
    const { repetition } = this.state;
    this.setState(({ repetition }) => ({
      repetition: repetition - 1,
    }));
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const { seconds, stage, repetition } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }

      if (seconds === 0) {
        if (repetition > 0) {
          if (stage === "breathIn") {
            this.changeSeconds(7);
            this.changeStage("hold");
          } else if (stage === "hold") {
            this.changeSeconds(8);
            this.changeStage("breathOut");
          } else if (stage === "breathOut") {
            if (repetition === 2) {
              this.setState(({ repetition }) => ({
                repetition: repetition - 1,
              }));
              this.changeSeconds(5);
              this.changeStage("breathIn");
            } else if (repetition === 1) {
              this.changeSeconds(0);
              this.changeStage("complete");
            }
          }
        } else {
          clearInterval(this.myInterval);
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds, stage, repetition } = this.state;
    return (
      <div>
        <Centerbutton startTimer={this.startTimer} />
        <h1>{repetition}</h1>
        <h1>{seconds}</h1>
      </div>
    );
  }
}

export default Timer;
