import useLocalStorage from './useLocalStorage';

export default function ForgotPassPage() {
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
