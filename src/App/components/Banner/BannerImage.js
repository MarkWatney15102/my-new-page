import React from 'react';

class BannerImage extends React.Component {
    render () {
        let path = process.env.PUBLIC_URL + "/images/home_picture.jpg";
        return <>
             <div class="col-12 col-md-3 mb-3 text-center">
                <img src={path} class="profile-pic" alt="" />
            </div>
        </>;
    }
}

export default BannerImage;