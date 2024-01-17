import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (task) => {
    console.log(task);
    let {todos} = this.state;
    let newTaskObj = {'text': task}
    todos.push(newTaskObj);
    this.setState({
      todos:todos
    })
  };

  handleRemove = (todo) => {
    let {todos} = this.state;
    const tid = todos.indexOf(todo);
    todos.splice(tid,1);
    this.setState({
      todos:todos
    })
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form handleAdd={this.handleAdd} />
        <List todos={this.state.todos} handleRemove={this.handleRemove} />
      </div>
    );
  }
}
