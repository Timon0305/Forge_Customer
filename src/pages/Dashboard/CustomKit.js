import React from "react";
import {withNamespaces} from "react-i18next";

import classes from './BackgroundVideo.module.css';
import {Button, Card, CardBody} from "reactstrap";

const CustomKit = () => {
    const videoSource = "https://lytetechnology.com/wp-content/uploads/2020/10/3.mp4";
    return (
        <Card className={classes.darkBackground}>
            <CardBody>
                <div className={classes.Container} >
                    <video autoPlay="autoplay" loop="loop" muted className={classes.miniVideo} >
                        <source src={videoSource} type="video/mp4" />
                    </video>

                    <div className={classes.Content}>
                        <div>
                            <h1 className="mb-4 mt-3 text-center h1 text-white">
                                THE FORGE BUILD KITS
                            </h1>
                            <div className="text-center mb-4">
                                <h3 className="font-20 text-white  mb-2">
                                    For those who want to build their own PC. These are PC part bundles you build yourself
                                </h3>
                                <div className="text-center mt-4">
                                    <Button
                                        color="primary"
                                        outline
                                        className="waves-effect waves-light btn btn-lg"
                                    >
                                        SHOP NOW
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </CardBody>
        </Card>
    )
};

export default withNamespaces()(CustomKit)