import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome";
import LoginEmployee from "./LoginEmployee";
import RegisterEmployee from "./RegisterEmployee";
import RegisterCompany from "./RegisterCompany";
import LoginCompany from "./LoginCompany";

export default function App(){
    return (
        <Router>
            <div>
            <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/loginemployee">
                        <LoginEmployee />
                    </Route>
                    <Route path="/registeremployee">
                        <RegisterEmployee />
                    </Route>
                    <Route path="/logincompany">
                        <LoginCompany />
                    </Route>
                    <Route path="/registercompany">
                        <RegisterCompany />
                    </Route>
                    </Switch>
            </div>
        </Router>
    );
}