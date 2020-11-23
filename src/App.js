import React from "react";
// import "./App.css";
import { useAuth } from "./context/AuthContext";
import AuthenticatedApp from "./Components/AuthenticatedApp";
import UnauthenticatedApp from "./Components/UnauthenticatedApp";


function App() {

  const { isLoggedIn } = useAuth();

  if (isLoggedIn) return <AuthenticatedApp />
  else return <UnauthenticatedApp />
}

export default App;

// 1. Hvis innlogget -> Hovedside
//    Hvis ikke      -> Innlogging
// 2. Innloggingsside
//    2 Input-felt
//    1 Checkbox for husk meg
//    1 Submit-knapp
// 3. Hovedside - Innlogget
//    Hvis Admin -> Adm.Avvik
//               -> Elevliste
//               -> Meld Avvik
//
//   Hvis Bruker -> Meld Avvik
//    

