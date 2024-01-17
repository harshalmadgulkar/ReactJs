import { Component } from "react";

export class Todo extends Component {
  render() {
    // console.log("ToDo.js" ,this.props);
    return (
      <div className="todo">
        <p> {this.props.todo.text} </p>
        <button onClick= {()=>this.props.handleRemove(this.props.todo)}>x</button>
      </div>
    );
  }
}
