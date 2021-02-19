import React from 'react';
import Routing from './Routing';
import Navbar from './Navbar';

class App extends React.Component {
    render () {
        return <>
            <Navbar />
            <Routing />
        </>
    }
}

export default App;