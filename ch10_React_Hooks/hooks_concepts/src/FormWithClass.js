import React from "react";

class FormWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
    };
  }

  nameHandler=(e)=>{
    this.setState({
        name:e.target.value
    })
  }

  lastNameHandler=(e)=>{
    this.setState({
        lastName:e.target.value
    })
  }

  componentDidMount() {
    document.title = this.state.name + " " + this.state.lastName;
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.lastName;
  }

  render() {
    const {name,lastName}= this.state;
    return (
      <>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={this.state.name} onChange={(e)=>this.nameHandler(e)} />
          <hr/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={this.state.lastName} onChange={(e)=>this.lastNameHandler(e)} />
        </form>
        <h2> Hello, {name +" "+lastName} </h2>
      </>
    );
  }
}
export default FormWithClass;
