import React from "react";
import ComponentA from "./ComponentA.js";
import ComponentB from "./ComponentB.js";
import TimerOne from "./Timer/TimerOne.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mount: false,
    };
  }

  handleMount = () => {
    this.setState((prevState) => ({
      mount: !prevState.mount,
    }));
  };

  render() {
    return (
      <>
        {/* <h1> APP </h1> */}
        {/* <ComponentA /> */}
        <button onClick={this.handleMount}>
          {" "}
          {this.state.mount ? "Un-Mount" : "Mount"}{" "}
        </button>
        {this.state.mount ? <TimerOne /> : null}
      </>
    );
  }
}
export default App;