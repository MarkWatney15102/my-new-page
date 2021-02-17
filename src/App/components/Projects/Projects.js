import React from 'react';
import Project from './Project';

class Projects extends React.Component {
    render () {
        return (
        <div class="container-fluid" data-aos="fade-up">
            <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
                <div class="headline-box">
                    <h1 class="headline-title">Projekte</h1>
                </div>
                <table class="table">
                    <thead>
                    <tr>
                        <td>#</td>
                        <td>Name</td>
                        <td>Sprache</td>
                        <td>Zum Projekt</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.projects.map(
                            project => (
                                <Project key={project.github_id} data={project}/>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
        );
    }
}

export default Projects;