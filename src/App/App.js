import React from 'react';
import Routing from './Routing';
import Navbar from './Navbar';
import Banner from './components/Banner/Banner';

class App extends React.Component {
    render () {
        return <>
            <Navbar />
            <Banner />
            <Routing />
        </>
    }
}

export default App;