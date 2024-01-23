import React from "react";

class TimerOne extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
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
      div>
        <h2>Time Spent: {this.state.time}</h2>
        {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
      </div>
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

  componentDidUpdate(prevProps,prevState,snapShot) {
    console.log("TimerOne componentDidUpdate");
    console.log("__________________________");
    console.log("prevProps",prevProps);
    console.log("prevState",prevState);
    console.log("snapShot",snapShot);

    if (prevProps.timerOn!== this.props.timerOn) {
      if(this.props.timerOn){
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      }
      else{
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    console.log("TimerOne componentWillUnmount");
    clearInterval(this.timer);
  }
}

export default TimerOne;
