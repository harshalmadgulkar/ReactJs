import { useState } from "react";
import useLocalStorage from './useLocalStorage';

export default function LoginPage() {
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");

  // // find email from localStorage and setEmail on mounting
  // useEffect(() => {
  //   let email = localStorage.getItem("email");
  //   console.log(email);
  //   if (email) {
  //     setEmail(email);
  //   }
  // }, []);

  // // setItem in localStorage when email changes
  // useEffect(() => {
  //   localStorage.setItem("email", email);
  // }, [email]);

  const {email, setEmail} = useLocalStorage();

  return (
    <>
      <h1>Login to the Portal</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          ></input>
        </div>
        <br />
        <div>
          <input
            val={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          ></input>
        </div>
        <br />
        <div>
          <button>Login</button>
        </div>
      </form>
      <br />
    </>
  );
}
