import React from 'react';
import Projects from './Projects/Projects';
import Loading from './Other/Loading';

class ProjectController extends React.Component {
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
        let projectViewData = <></>;
        if (error) {
            projectViewData = <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            projectViewData = <div><Loading /></div>;
        } else {
            projectViewData = <>
                <Projects projects={projects}/>
            </>;
        }
        return <>
            {projectViewData}
        </>;
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

export default ProjectController;