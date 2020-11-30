import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Avviksliste from "../Pages/Avviksliste/Avviksliste";
import Hovedside from "../Pages/Hovedside/Hovedside";
import MeldAvvik from '../Pages/MeldAvvik/MeldAvvik';
import MineAvvik from "../Pages/MineAvvik/MineAvvik";
import MakeUserAdmin from "../Components/MakeUserAdmin";

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Hovedside />
                </Route>

                <Route exact path="/elevliste">
                    <>Elevliste</>
                </Route>

                <Route exact path="/avviksliste">
                    <Avviksliste />
                </Route>

                <Route exact path="/mine-avvik">
                    <MineAvvik />
                </Route>

                <Route exact path="/meld-avvik">
                    <MeldAvvik />
                </Route>

                <Route exact path="/top-secret">
                    <MakeUserAdmin />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AuthenticatedApp;