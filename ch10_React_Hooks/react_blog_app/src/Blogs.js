function Blogs(props) {

    const handleDeleteBlog=(i)=>{
        props.setblogArray(props.blogArray.filter((blog,index)=>i!==index));
    }

    console.log(props);
  return (
    <>
      <h2> Blogs </h2>
      <div id="blogs">
        {props.blogArray.map((blog,i) => (
          <div key={i}>
            <h4> {blog.title} </h4>
            <p> {blog.content} </p>
            <button onClick={()=>handleDeleteBlog(i)}> Delete </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;