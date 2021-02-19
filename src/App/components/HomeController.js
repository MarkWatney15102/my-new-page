import React from 'react';
import Intruduction from './Home/Introduction';
import NextGoals from './Home/NextGoals';

class HomeController extends React.Component {
    render() {
        return <>
            <Intruduction />
            <br />
            <NextGoals />
        </>;
    }
}

export default HomeController;