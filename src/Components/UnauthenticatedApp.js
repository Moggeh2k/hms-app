import React from "react";
import Loginside from "../Pages/Login/Loginside";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const UnauthenticatedApp = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Loginside />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default UnauthenticatedApp;