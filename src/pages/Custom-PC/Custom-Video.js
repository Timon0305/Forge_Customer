import React from "react";
import {withNamespaces} from "react-i18next";

import classes from '../Dashboard/BackgroundVideo.module.css';
import {Button} from "reactstrap";

const CustomVideo = () => {
    const videoSource = "https://lytetechnology.com/wp-content/uploads/2020/10/2-black-bars-remix.mp4";
    return (
        <div className={classes.Container} >
            <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                <source src={videoSource} type="video/mp4" />
            </video>

            <div className={classes.secondContent}>
                <div className={classes.SubContent} >
                    <h1 className='text-white'>The Forge Custom PCS</h1>
                    <h3 className='text-white'>YOU CHOOSE THE PARTS. WE BUILD AND SHIP IT TO YOUR DOOR.</h3>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(CustomVideo)
