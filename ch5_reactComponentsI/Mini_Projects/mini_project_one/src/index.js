import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import './styles.css'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

let name = "Pranav Sharad Yeole";
let email = "pranav@google.com";
let phone = "8546465544";
let address = "ABC, xyz street.";

let skillsList = ["HTML", "CSS", "JavaScript", "React", "Node"];

let about = "Hi, my name is Pranav. I am full stack web devloper and I have developed several projects with MERN stack. I am also familiar with Pythan and Django.";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

export {name, email, phone, address, skillsList, about};