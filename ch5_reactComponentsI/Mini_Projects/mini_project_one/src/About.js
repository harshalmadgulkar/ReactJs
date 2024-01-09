import React from 'react';

import {about} from './index.js';

// Write this code in About.js file
class About extends React.Component {
    render() {
      return (
        <div className="about">
            <p> {about} </p>
        </div>
      );
    }
  }

  export default About;