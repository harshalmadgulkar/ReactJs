import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import ForgotPassPage from "./components/ForgotPassPage";

import "./App.css";

function App() {
  const [knowPassword, setKnowPassword] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome!</h1>
      </header>
      {knowPassword ? <LoginPage /> : <ForgotPassPage />}
      <button
        onClick={() => {
          knowPassword ? setKnowPassword(false) : setKnowPassword(true);
        }}
      >
        {knowPassword ? "Forgot Password" : "Back to Login"}
      </button>
    </div>
  );
}

export default App;