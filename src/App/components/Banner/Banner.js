import React from 'react';
import BannerText from './BannerText'
import BannerImage from './BannerImage';

class Banner extends React.Component {
    render () {
        return (
            <div class="container-fluid header bg-main py-5" id="page-banner">
                <div class="container">
                    <div class="row">
                        <BannerImage />
                        <BannerText />
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;