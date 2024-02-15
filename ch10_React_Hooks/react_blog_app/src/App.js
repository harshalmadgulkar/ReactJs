import React, { useState } from "react";
import "./App.css";
import BlogForm from "./BlogForm";
import Blogs from "./Blogs";

function App() {
  const [blogArray, setblogArray] = useState([]);

  return (
    <>
      <BlogForm blogArray={blogArray} setblogArray={setblogArray} />
      <Blogs blogArray={blogArray} setblogArray={setblogArray} />
    </>
  );
}

export default App;