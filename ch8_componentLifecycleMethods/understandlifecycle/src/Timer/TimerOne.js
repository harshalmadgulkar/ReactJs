import React from "react";

class TimerOne extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      startTimer: false,
    };
    this.timer = null;
    console.log("TimerOne Constructor");
  }

  handleStartStop = () => {
    this.setState((prevState) => ({
      startTimer: !prevState.startTimer,
    }));
  };

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("TimerOne render");
    console.log(this.state);

    return (
      <>
        <h1>
          Time Spent{" "}
          {this.state.startTimer
            ? new Date(this.state.time * 1000).toISOString().slice(11, 19)
            : "00:00:00"}
        </h1>
        <button onClick={() => this.handleStartStop()}>
          {" "}
          {this.state.startTimer ? "STOP" : "START"}{" "}
        </button>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("__________________________");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("TimerOne getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("TimerOne componentDidUpdate");
    console.log("__________________________");

    if (this.state.startTimer) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      }
  }

  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }
}

export default TimerOne;
