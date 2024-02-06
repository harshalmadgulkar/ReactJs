import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setcount] = useState(0);

  useEffect(()=>{
    document.title = count;
  })

  return (
    <>
      <h4> {count} </h4>
      <button onClick={() => setcount(count + 1)}> Increase Count </button>
      <button onClick={() => setcount(count - 1)}> Increase Count </button>
    </>
  );
}
export default Counter;
