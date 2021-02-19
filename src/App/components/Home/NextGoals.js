import React from 'react';

class NextGoals extends React.Component {
    render() {
       return (
        <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
            <div class="card">
                <div class="card-body">
                    <h2>Meine Ziele für das Jahr 2021</h2>
                    <ul>
                        <li>Infomatik Ziele
                            <ul>
                                <li>ReactJs Lernen (Basis von dieser Webseite)</li>
                                <li>RESTful API's lernen</li>
                                <li>GraphQL lernen</li>
                            </ul>
                        </li>
                        <li>Sonstige Ziele
                            <ul>
                                <li>Umbau meines Golf 3's auf GTI Motor</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       );
    }
}

export default NextGoals;