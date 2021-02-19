import React from 'react';
import Projects from './Projects/Projects';
import Loading from './Other/Loading';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            projects: []
        };
    }
    render() {
        const { error, isLoaded, projects } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div><Loading /></div>;
        } else {
            return <>
                <Projects projects={projects}/>
            </>;
        }
    }
    componentWillMount () {
        fetch('https://backend.eikewientjes.de/?method=getProjects',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
              },
            method: "get",
            dataType: 'json',
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                isLoaded: true,
                projects: data
            });
        })
        .catch(err => console.log(err))
    }
}

export default Home;