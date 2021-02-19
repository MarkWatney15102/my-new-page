import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeController from './components/Home';
import AboutController from './components/About';

class Routing extends React.Component {
    render () {
        return <Router>
            <Switch>
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