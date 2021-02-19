import React from 'react';

class Navbar extends React.Component {
    render () {
        return <>
            <div class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">Eike Wientjes</a>
            
                <div class="collapse navbar-collapse" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/aboutme">Über mich</a>
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
        </>
    }
}

export default Navbar;