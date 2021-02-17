import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from './components/Home';
import AboutPage from './components/About';

class Routing extends React.Component {
    render () {
        return <Router>
            <div class="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" to="/">Eike Wientjes</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="/aboutme">Über mich</Link>
                        </li>
                    </ul>
                </div>
                <ul class="float-right no-deco social-media">
                <li><a href="https://www.instagram.com/eike15102/" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                </li>
                <li><a href="https://www.snapchat.com/add/tricky15102" target="_blank"><i class="fab fa-snapchat-ghost" aria-hidden="true"></i></a></li>
                <li><a href="https://github.com/MarkWatney15102" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a></li>
            </ul>
            </div>
            <Switch>
                <Route path="/aboutme">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>;
    }
}

function Home() {
    return <>
        <HomePage />
    </>;
}

function About() {
    return <>
        <AboutPage />
    </>;
}


export default Routing;