import React, { useEffect, useState } from "react";

export default function ForgotPassPage() {
  const [email, setEmail] = useState("");

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
      <h1>Reset your Password</h1>
      <form>
        <div>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          ></input>
        </div>
        <br />
        <div>
          <button>Continue</button>
        </div>
        <br />
      </form>
    </>
  );
}
