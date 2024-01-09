import React from "react";
import "./styles.css";

const MOODS = [
  "happy",
  "sad",
  "angry",
  "excited",
  "fearful",
  "disgusted",
  "surprised"
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prediction: ""
    };
    // Solution 3
    this.handleClick = this.handleClick.bind(this);
  }

  // First Solution
  // handleClick=()=> {
  //   const moodIndex = Math.floor(Math.random() * MOODS.length);
  //   this.setState({ prediction: MOODS[moodIndex] });
  // }

  // Second Solution
  // handleClick() {
  //   const moodIndex = Math.floor(Math.random() * MOODS.length);
  //   this.setState({ prediction: MOODS[moodIndex] });
  // }

  // Third Solution
  handleClick() {
    const moodIndex = Math.floor(Math.random() * MOODS.length);
    this.setState({ prediction: MOODS[moodIndex] });
  }

  render() {
    return (
      <div>
        <h1>Mood Predictor</h1>
        {this.state.prediction && (
          <p>
            Mood predictor has predicted that you mood will be
            <b> {this.state.prediction} </b>today.
          </p>
        )}
        {/* Solution 1 */}
        {/* <button onClick={this.handleClick}>Predict Mood</button> */}

        {/* Solution 2 */}
        {/* <button onClick={this.handleClick.bind(this.state)}>Predict Mood</button> */}

        {/* Solution 3 */}
        <button onClick={this.handleClick}>Predict Mood</button>
      </div>
    );
  }
}

export default App;
