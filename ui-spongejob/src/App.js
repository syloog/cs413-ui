import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome";
import LoginEmployee from "./LoginEmployee";
import RegisterEmployee from "./RegisterEmployee";
import RegisterCompany from "./RegisterCompany";
import LoginCompany from "./LoginCompany";
import ApplicationPage from "./ApplicationPage";
import CreateApplication from "./CreateApplication";
import CreateJobPost from "./CreateJobPost";
import MyApplications from "./MyApplications";
import JobApplications from "./JobApplications";
import UserProfile from "./UserProfile";


export default function App(){
    return (
        <Router>
            <div>
            <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route path="/loginemployee">
                        {UserProfile.clearAllInfo()}
                        <LoginEmployee />
                    </Route>
                    <Route path="/registeremployee">
                        {UserProfile.clearAllInfo()}
                        <RegisterEmployee />
                    </Route>
                    <Route path="/logincompany">
                        {UserProfile.clearAllInfo()}
                        <LoginCompany />
                    </Route>
                    <Route path="/registercompany">
                        {UserProfile.clearAllInfo()}
                        <RegisterCompany />
                    </Route>
                    <Route path="/createapplication">
                        <CreateApplication />
                    </Route>
                    <Route path="/myapplications">
                        <MyApplications />
                    </Route>
                    <Route path="/createjobpost">
                        <CreateJobPost />
                    </Route>
                    <Route path="/applicationpage">
                        <ApplicationPage />
                    </Route>
                    <Route path="/jobapplications">
                        <JobApplications />
                    </Route>
                    </Switch>
            </div>
        </Router>
    );
}