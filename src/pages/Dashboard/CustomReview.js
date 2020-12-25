import React from "react";
import {withNamespaces} from "react-i18next";

import classes from './BackgroundVideo.module.css';
import {Button, Card, CardBody} from "reactstrap";

const CustomReview = () => {
    const videoSource = "https://lytetechnology.com/wp-content/uploads/2020/11/phone-scroll-blow-V3-Bohna-Edition.mp4";
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
                                CUSTOMER REVIEWS
                            </h1>
                            <div className="text-center mb-4">
                                <div className="text-center mt-4">
                                    <Button
                                        color="primary"
                                        outline
                                        className="waves-effect waves-light btn btn-lg"
                                    >
                                        See Reviews
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

export default withNamespaces()(CustomReview)