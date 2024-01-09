import Form from "./Form"

// Complete the HomePage Component and export it
let name = "Harshal";
let email = "harshal.madgulkar725@gmail.com"


function HomePage() {
  return (
    <div className="Homepage">
      {/* Create a h1 tag and render Form Component here */}
      <h1> HomePage </h1>
      <Form/>
    </div>
  );
}

export {name, email};
export default HomePage;