import React from "react";
import { Container, Row, Col } from "reactstrap";
import paypalImage from '../../assets/images/myimage/paypal-payment-transparant.png'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid={true}>
                    <Row>
                        <Col md={6} className='text-sm-right'>
                            <img src={paypalImage} alt="paypal"/>
                        </Col>
                        <Col md={6}>
                            <div className="text-sm-left d-none d-sm-block ml-sm-3">
                                <h5 className='text-white'>
                                    CONTACT INFO
                                </h5>
                                <p className='text-white'>
                                    <i className='mdi mdi-phone'/>&nbsp; + 1098238947
                                </p>
                                <h5 className='text-white'>
                                    CONNECT WITH US ON
                                </h5>
                                <p className='text-white'>
                                    <i className='mdi mdi-youtube'/> &nbsp;
                                    <i className='mdi mdi-facebook'/>&nbsp;
                                    <i className='mdi mdi-twitter'/>&nbsp;
                                    <i className='mdi mdi-instagram'/>&nbsp;
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
