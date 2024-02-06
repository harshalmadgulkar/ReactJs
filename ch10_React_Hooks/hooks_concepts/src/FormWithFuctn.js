import React, { useState, useEffect } from "react";

function FormWithFuctn() {
  const [name, setName] = useState("H");
  const [lastName, setlastName] = useState("M");

  // this will work as componentDidMount & componentDidUpdate also.
  // useEffect(()=>{
  //   document.title = name +" "+ lastName;
  // })

  // this will work as componentDidMount only (after passing blank array)
  // useEffect(()=>{
  //   document.title = name+" "+lastName;
  // },[])

  // this will work as componentDidUpdate only (after passing array of args)
  useEffect(()=>{
    document.title = name+" "+lastName;
  },[name])

  return (
    <>
      <form>
        <label htmlFor="name"> Name </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="lastName"> Last Name </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
        />
      </form>
      <h2> Hello, {name + " " + lastName} </h2>
    </>
  );
}
export default FormWithFuctn;