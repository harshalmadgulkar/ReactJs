import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  render() {
    const {todos,handleRemove} = this.props;
    // console.log(this.props);
    return (
      <div className="list">

        {todos.map((todo,index)=>(
          <Todo todo={todo} key={index} handleRemove={handleRemove} />
        ))}

      </div>
    );
  }
}
