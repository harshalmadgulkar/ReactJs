import React, { useState, useEffect, useRef } from "react";

function BlogForm(props) {
  //   const [title, setTitle] = useState("");
  //   const [content, setcontent] = useState("");
  const [formData, setFormData] = useState({ title: "", content: "" });
  const titleRef = useRef(null);

  // focus at title input on rendering/mounting
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  //set title of page according to first blog
  useEffect(()=>{
    if(props.blogArray.length){
    document.title = props.blogArray[0].title;
    }
    else{
      document.title = "React App";
    }
  },[props.blogArray])

  const handleAddBlog = (e) => {
    e.preventDefault();
    // props.setblogArray([{title,content},...props.blogArray]);
    props.setblogArray([
      { title: formData.title, content: formData.content },
      ...props.blogArray,
    ]);
    // setTitle("");
    // setcontent("");
    // document.title = formData.title;
    setFormData({ title: "", content: "" });
    titleRef.current.focus();
  };

  return (
    <>
      <h2> Write a Blog! </h2>
      <form id="blog_form" onSubmit={(e) => handleAddBlog(e)}>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            ref={titleRef}
            placeholder="Title goes here..."
            // value={title}
            value={formData.title}
            // onChange={(e) => setTitle(e.target.value)}
            onChange={(e) =>
              setFormData({ title: e.target.value, content: formData.content })
            }
            required
          />
        </label>
        <label htmlFor="content">
          Content
          <input
            type="text"
            id="content"
            placeholder="Content goes here..."
            // value={content}
            value={formData.content}
            // onChange={(e) => setcontent(e.target.value)}
            onChange={(e) =>
              setFormData({ title: formData.title, content: e.target.value })
            }
            required
          />
        </label>
        <br />
        <button> ADD </button>
      </form>
    </>
  );
}

export default BlogForm;
