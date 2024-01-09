import React from "react";
import "./styles.css";

import Hero from './Hero.js';
import Skills from './Skills.js';
import About from './About.js';

class App extends React.Component {
  render() {
    return(
      <>
      <Hero/>
      <Skills/>
      <About/>
      </>
    );
  }
}

export default App;
