// import React, { useState, useEffect } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errorState, setError] = useState("");

//   coker" && password === "hunst submitOnClick = () => {
//     if (username === "Hacnter2") {
//       window.location.assign("/hovedside");
//     } else {
//       setError("Feil Brukernavn eller Passord");
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Brukernavn"
//         value={username}
//         onChange={(e) => {
//           setUsername(e.target.value);
//         }}
//       />
//       <input
//         type="password"
//         placeholder="Passord"
//         value={password}
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <button onClick={submitOnClick}>Log in</button>
//       <input
//         type="checkbox"
//         value={rememberMe}
//         onChange={(e) => {
//           setRememberMe(e.target.checked);
//         }}
//       />
//       <div>{errorState}</div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import Fire from "../../Components/Fire";
// import "/App.css";
import Hero  from '../../Components/HovedsideKomponent';
import Login from '../../Components/LoginKomponent';
import './Loginside.css';



const Loginside = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    Fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    Fire
      .auth()
      .signCreateUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    Fire.auth().signOut();
  };

  const authListener = () => {
    Fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="Loginside">
      {user ? (
        <Hero handleLogout={handleLogout} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
};


export default Loginside;
