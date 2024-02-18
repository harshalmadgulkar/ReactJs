import { useState, useEffect } from "react";

export default function useLocalStorage() {
  const [email, setEmail] = useState("");

  // find email from localStorage and setEmail on mounting
  useEffect(() => {
    let email = localStorage.getItem("email");
    console.log(email);
    if (email) {
      setEmail(email);
    }
  }, []);

  // setItem in localStorage when email changes
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  return {email,setEmail};
}