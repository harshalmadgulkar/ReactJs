import React from "react";
import ComponentB from "./ComponentB.js";

class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "ComponentA",
      data: [],
    };
    console.log("ComponentA Constructor");
  }

  render() {
    console.log("ComponentA Render");
    console.log(this.state.data);
    return (
      <>
        <h1> {this.state.name} </h1>

        <table border="2">
          <thead>
              <th> ID </th>
              <th> Name </th>
              <th> User Name </th>
              <th> Email Id </th>
              <th> Address </th>
              <th> Phone </th>
              <th> Website </th>
              <th> Company Name </th>
              <th> Company Details </th>

          </thead>
          <tbody>
            {this.state.data.map((user,id) =>(
              <tr>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.username} </td>
                <td><a href= {user.email}> {user.email} </a></td>
                <td> {user.address.suite},{user.address.street},{user.address.city},{user.address.zipcode} </td>
                <td> {user.phone} </td>
                <td><a href={user.website} target="_blank"> {user.website} </a></td>
                <td> {user.company.name} </td>
                <td> {user.company.bs} </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <ul>
          {this.state.data.map((user, id) => (
            <li key={id}>{user.username}</li>
          ))}
        </ul> */}
        {/* <ComponentB /> */}
      </>
    );
  }

  static getDerivedStateFromProps() {
    console.log("ComponentA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("ComponentA componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }
}

export default ComponentA;
