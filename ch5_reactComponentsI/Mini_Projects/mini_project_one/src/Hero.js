import { Component } from "react";

import { name, email, phone, address } from "./index.js";

// Write this code in Hero.js file
class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <p className="name"> Name: {name} </p>
        <p> Email: {email} </p>
        <p> Phone: {phone} </p>
        <p> Address: {address} </p>
      </div>
    );
  }
}

export default Hero;
