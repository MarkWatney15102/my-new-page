import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeController from './components/HomeController';
import AboutController from './components/AboutController';
import SetupController from './components/SetupController';
import ProjectsController from './components/ProjectController';

class Routing extends React.Component {
    render () {
        return <Router>
            <Switch>
                <Route path="/projects">
                    <ProjectsController />
                </Route>
                <Route path="/setup">
                    <SetupController />
                </Route>
                <Route path="/aboutme">
                    <AboutController />
                </Route>
                <Route path="/">
                    <HomeController />
                </Route>
            </Switch>
        </Router>;
    }
}

export default Routing;