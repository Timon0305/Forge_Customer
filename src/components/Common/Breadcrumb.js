import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Row, Col, Collapse} from "reactstrap";

class Breadcrumbs extends Component {

    render() {
        return (
            <React.Fragment>
                <Row style={styles.container}>
                    <Col xs="12">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
                            <ul className="navbar-nav" style={{width: '100%', justifyContent: 'space-between'}}>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18"
                                          to="/products/cpu">
                                        CPU
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/memory"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18"  >
                                        MEMORY
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/motherboard" className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18">
                                        MOTHERBOARD
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/storage"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18" >
                                        STORAGE
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/video-card"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18">
                                        VIDEO CARD
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/power-supply"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18" >
                                        POWER SUPPLY
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/cpu-cooler"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18" >
                                        CPU COOLER
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/case"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18" >
                                        CASE
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link to="/products/operating-system"
                                          className="nav-link dropdown-toggle arrow-none text-pink font-weight-bold font-size-18" >
                                        OPERATING SYSTEM
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Breadcrumbs;

const styles = {
    container: {
        width: '100%',
        textAlign: 'center'
    }
};