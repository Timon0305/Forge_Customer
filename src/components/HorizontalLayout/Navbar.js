import React, { Component } from "react";
import {Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import { withNamespaces } from 'react-i18next';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <div className="topnav">
                    <div className="container">
                        <nav className="navbar navbar-light navbar-expand-lg topnav-menu" id="navigation">
                            <Collapse isOpen={this.props.menuOpen} className="navbar-collapse" id="topnav-menu-content">
                                <ul className="navbar-nav" style={{width: '100%', justifyContent: 'space-evenly'}}>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle arrow-none"
                                             to="/dashboard">
                                            <i className="bx bx-home-circle mr-2"/>DASHBOARD
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link to="/products/cpu"
                                              className="nav-link dropdown-toggle arrow-none"  >
                                            <i className="bx bx-customize mr-2"/>Forge your PC
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link to="/#" className="nav-link dropdown-toggle arrow-none">
                                            <i className="bx bx-collection mr-2"/>Partner PC
                                        </Link>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle arrow-none" to="/#">
                                            <i className="bx bx-file mr-2"/>Forged PCs
                                        </Link>
                                    </li>
                                </ul>
                            </Collapse>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(withNamespaces()(Navbar));
