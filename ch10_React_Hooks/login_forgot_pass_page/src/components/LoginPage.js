import React, { useEffect, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    let email = localStorage.getItem("email");
    console.log(email);
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return (
    <>
      <h1>Login to the Portal</h1>
      <form>
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
