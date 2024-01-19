import React from "react";

class ComponentB extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentB",
    };
    console.log("ComponentB Constructor");
  }

  render() {
    console.log("ComponentB Render");
    return <h2> {this.state.name} </h2>;
  }

  static getDerivedStateFromProps() {
    console.log("ComponentB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentB componentDidMount");
  }
}

export default ComponentB;
