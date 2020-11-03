import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorState, setError] = useState("");

  const submitOnClick = () => {
    if (username === "Hacker" && password === "hunter2") {
      window.location.assign("/hovedside");
    } else {
      setError("Feil Brukernavn eller Passord");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Brukernavn"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Passord"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={submitOnClick}>Log in</button>
      <input type="checkbox" value={rememberMe} onChange={(e) => {setRememberMe(e.target.checked)}} /> 
      <div>{errorState}</div>


    </div>
  );
};
export default Login;
