import React from "react";
import "./App.css";
import Login from "./Pages/Login/Loginside";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/hovedside">
          {/* <Page1/> */}
        </Route>
        <Route exact path="/elevliste">
          Page2
        </Route>
        <Route exact path="/avviksliste">
          Page3
        </Route> 
        <Route exact path="/mine-avvik">
          Page3
        </Route>
      </Switch>
    </BrowserRouter>
  );
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