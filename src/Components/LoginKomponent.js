import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { clearErrors, emailError, passwordError, login } = useAuth();
  
  const handleLogin = () => {
    clearErrors();
    login(email, password);
  }

  return (
    <section className="Login">
      <div className="LoginContainer">
        <label>Brukernavn</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMessage">{emailError} </p>
        <label>Passord</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMessage">{passwordError}</p>
        <div className="ButtonContainer">
          <button onClick={handleLogin}> Log inn </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
