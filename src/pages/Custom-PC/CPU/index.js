import React from 'react';
import { Container, Row, Col, Card} from "reactstrap";
import CustomVideo from "./../Custom-Video";
import classes from '../../Dashboard/BackgroundVideo.module.css';
import Filter from "./../Filter";
import Products from "./Products";
import Category from "./../Category";
const CPU = () => {

    return (
        <React.Fragment>
            <div className="page-content" style={styles.container}>
                <Container fluid>
                    <Row>
                        <Col xs='12' style={styles.videoStyle}>
                            <CustomVideo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={styles.paddingStyle}>
                            <Card className={classes.customerCardBackground}>
                                <Row>
                                    <Col lg={1}/>
                                    <Col lg={3}>
                                        <Filter/>
                                    </Col>
                                    <Col lg={7}>
                                        <Category/>

                                        <Products/>
                                    </Col>
                                    <Col lg={1}/>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
};

export default CPU

const styles = {
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '0px'
    },
    videoStyle : {
        paddingLeft: '0px',
        paddingRight: '0px',
        maxHeight: '500px'
    },
    paddingStyle : {
        paddingLeft: '0px',
        paddingRight: '0px',
    }
};