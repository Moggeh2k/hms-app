import React from "react";
// import "./App.css";
import Loginside from "./Pages/Login/Loginside";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hovedside from "./Pages/Hovedside/Hovedside";
import MeldAvvik from './Pages/MeldAvvik/MeldAvvik';
import MineAvvik from "./Pages/MineAvvik/MineAvvik";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Loginside/>
        </Route>

        <Route exact path="/hovedside">
          <Hovedside/>
        </Route>

        <Route exact path="/elevliste">
          Elevliste
        </Route>

        <Route exact path="/avviksliste">
          Avviksliste
        </Route> 

        <Route exact path="/mine-avvik">
          <MineAvvik/>
        </Route> 

         <Route exact path="/meld-avvik">
         <MeldAvvik/>
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

