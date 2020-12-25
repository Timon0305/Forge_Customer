import React from 'react';
import {withNamespaces} from "react-i18next";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import classes from './BackgroundVideo.module.css';
const PreBuild = () => {

    const firstImage = 'https://lytetechnology.com/wp-content/uploads/2020/11/case-venom.png';
    const secondImage = 'https://lytetechnology.com/wp-content/uploads/2020/11/case-anthem.png';
    return (
        <React.Fragment>
            <Card className={classes.darkBackground}>
                <CardBody>
                    <h1 className="mb-4 mt-3 text-center h1 text-white">
                        The Forge Prebuilt PCs
                    </h1>
                    <div className="text-center mb-4">
                        <h3 className="font-20 text-white  mb-2">
                            Designed to be a good balance of price and performance
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
                    <div className='container'>
                        <Row className="mb-1 mt-3">
                            <Col xs="5">
                                <img src={firstImage} className={classes.fullWidth} alt="first"/>
                            </Col>
                            <Col xs='2'/>
                            <Col xs="5">
                                <img src={secondImage} className={classes.fullWidth} alt="second"/>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
};

export default withNamespaces()(PreBuild)