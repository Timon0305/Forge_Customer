import React from "react";
import {withNamespaces} from "react-i18next";

import classes from './BackgroundVideo.module.css';

const Video = () => {
    const videoSource = "http://esoftappsol.com/Design%20Showcase2.mp4";
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
            </video>

            <div className={classes.Content}>
                <div className={classes.SubContent} >
                    <h1 className='text-white' style={{fontSize: '50px'}}>The Forge PCs</h1>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(Video)