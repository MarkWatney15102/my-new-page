import React from 'react';

import Camera from './Camera';
import Computer from './Computer';

class Setup extends React.Component {
    render () {
        return <>
            <div class="col-sm-12 offset-sm-0 col-md-6 offset-md-3">
                <Camera />
                <Computer />
            </div>
        </>
    }
}

export default Setup;