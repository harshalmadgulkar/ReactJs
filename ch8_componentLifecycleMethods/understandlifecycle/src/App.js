import React from "react";
import ComponentA from "./ComponentA.js";
import ComponentB from "./ComponentB.js";
import TimerOne from "./Timer/TimerOne.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    this.setState((prevState) => {
      return {
        timerOn: !prevState.timerOn
      }
    })
  };

  render() {
    return (
      <>
        {/* <h1> APP </h1> */}
        {/* <ComponentA /> */}
        <TimerOne timerOn={this.state.timerOn}/>
        <button onClick={this.handleTimerOn}>{this.state.timerOn ? "STOP" : "START"}</button>
      </>
    );
  }
}
export default App;