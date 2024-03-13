// way1- useContext hook
import { useContext } from "react";
import { colorContext } from "../context.js";

const GrandChildComponent = () => {
  // way1- useContext hook
  const value = useContext(colorContext);

  return (
    // way1- useContext hook
    <p style={{ color: value.color }}>Color: {value.color} </p>

    // way2- context.consumer component
    // <colorContext.Consumer>
    //   {(value) => <p style={{ color: value.color }}>Color: {value.color} </p>}
    // </colorContext.Consumer>
  );
};
export default GrandChildComponent;
