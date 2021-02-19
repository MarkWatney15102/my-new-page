import React from 'react';

class Loading extends React.Component {
    render () {
        let path = process.env.PUBLIC_URL + "/images/loading.gif";
        return (
        <div class="container-fluid" data-aos="fade-up">
            <img src={path} alt="loading" class="center" />
        </div>
        );
    }
}

export default Loading;