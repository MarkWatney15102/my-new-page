import React from 'react';

class Project extends React.Component {
    render () {
        return (
            <tr>
                <td>{ this.props.data.github_id }</td>
                <td>{ this.props.data.name }</td>
                <td>{ this.props.data.language }</td>
                <td>
                    <a href={ this.props.data.url } class="btn btn-outline-success" target="_blank">
                        Zum Github Projekt
                    </a>
                </td>
            </tr>
        );
    }
}

export default Project;