import React, { Component } from "react";
import {Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//i18n
import { withNamespaces } from 'react-i18next';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var matchingMenuItem = null;
        var ul = document.getElementById("navigation");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;
        if (parent) {
            parent.classList.add("active"); // li
            const parent2 = parent.parentElement;
            parent2.classList.add("active"); // li
            const parent3 = parent2.parentElement;
            if (parent3) {
                parent3.classList.add("active"); // li
                const parent4 = parent3.parentElement;
                if (parent4) {
                    parent4.classList.add("active"); // li
                    const parent5 = parent4.parentElement;
                    if (parent5) {
                        parent5.classList.add("active"); // li
                        const parent6 = parent5.parentElement;
                        if (parent6) {
                            parent6.classList.add("active"); // li
                        }
                    }
                }
            }
        }
        return false;
    };

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
                                        <Link to="/#" onClick={e => { e.preventDefault(); this.setState({ appState: !this.state.appState }); }} className="nav-link dropdown-toggle arrow-none"  >
                                            <i className="bx bx-customize mr-2"/>CUSTOM PC <div className="arrow-down"/>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.appState })} >
                                            <Link to="/products/cpu" className="dropdown-item">CPU's</Link>
                                            <Link to="/products/memory" className="dropdown-item">MEMORY</Link>
                                            <Link to="/products/motherboard" className="dropdown-item">MOTHERBOARD</Link>
                                            <Link to="/products/video-card" className="dropdown-item">VIDEO CARD</Link>
                                            <Link to="/products/power-supply" className="dropdown-item">POWER SUPPLY</Link>
                                            <Link to="/products/cpu-cooler" className="dropdown-item">CPU COOLER</Link>
                                            <Link to="/products/case" className="dropdown-item">CASES</Link>
                                            <Link to="/products/storage" className="dropdown-item">STORAGE</Link>
                                            <Link to="/products/software" className="dropdown-item">OPERATING SOFTWARE</Link>

                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link to="/#" className="nav-link dropdown-toggle arrow-none"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.setState({ componentState: !this.state.componentState });
                                            }}>
                                            <i className="bx bx-collection mr-2"></i>{this.props.t('Components')} <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.componentState })}>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ formState: !this.state.formState });
                                                    }}>
                                                   {this.props.t('Forms')}  <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.formState })}>
                                                    <Link to="form-elements" className="dropdown-item">{this.props.t('Form Elements')}</Link>
                                                    <Link to="form-validation" className="dropdown-item">{this.props.t('Form Validation')}</Link>
                                                    <Link to="form-advanced" className="dropdown-item">{this.props.t('Form Advanced')}</Link>
                                                    <Link to="form-editors" className="dropdown-item">{this.props.t('Form Editors')}</Link>
                                                    <Link to="form-uploads" className="dropdown-item">{this.props.t('Form File Upload')} </Link>
                                                    <Link to="form-xeditable" className="dropdown-item">{this.props.t('Form Xeditable')}</Link>
                                                    <Link to="form-repeater" className="dropdown-item">{this.props.t('Form Repeater')}</Link>
                                                    <Link to="form-wizard" className="dropdown-item">{this.props.t('Form Wizard')}</Link>
                                                    <Link to="form-mask" className="dropdown-item">{this.props.t('Form Mask')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ tableState: !this.state.tableState });
                                                    }}>
                                                    {this.props.t('Tables')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.tableState })}>
                                                    <Link to="tables-basic" className="dropdown-item">{this.props.t('Basic Tables')}</Link>
                                                    <Link to="tables-datatable" className="dropdown-item">{this.props.t('Data Tables')}</Link>
                                                    <Link to="tables-responsive" className="dropdown-item">{this.props.t('Responsive Table')}</Link>
                                                    <Link to="tables-editable" className="dropdown-item">{this.props.t('Editable Table')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ chartState: !this.state.chartState });
                                                    }}>
                                                     {this.props.t('Charts')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.chartState })}>
                                                    <Link to="apex-charts" className="dropdown-item"> {this.props.t('Apex charts')}</Link>
                                                    <Link to="chartist-charts" className="dropdown-item"> {this.props.t('Chartjs Chart')}</Link>
                                                    <Link to="e-charts" className="dropdown-item"> {this.props.t('E Chart')}</Link>
                                                    <Link to="tui-charts" className="dropdown-item">{this.props.t('Toast UI Chart')}</Link>
                                                    <Link to="sparkline-charts" className="dropdown-item"> {this.props.t('Sparkline Chart')}</Link>
                                                    <Link to="charts-knob" className="dropdown-item">{this.props.t('Knob Chart')}</Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ iconState: !this.state.iconState });
                                                    }}>
                                                     {this.props.t('Icons')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.iconState })}>
                                                    <Link to="icons-boxicons" className="dropdown-item">{this.props.t('Boxicons')}</Link>
                                                    <Link to="icons-materialdesign" className="dropdown-item">{this.props.t('Material Design')}</Link>
                                                    <Link to="icons-dripicons" className="dropdown-item">{this.props.t('Dripicons')}</Link>
                                                    <Link to="icons-fontawesome" className="dropdown-item">{this.props.t('Font awesome')} </Link>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ mapState: !this.state.mapState });
                                                    }}>
                                                    {this.props.t('Maps')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.mapState })}>
                                                    <Link to="maps-google" className="dropdown-item">{this.props.t('Google Maps')} </Link>
                                                    <Link to="maps-vector" className="dropdown-item">{this.props.t('Vector Maps')} </Link>
                                                    <Link to="maps-leaflet" className="dropdown-item">{this.props.t('Leaflet Maps')} </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle arrow-none" to="#"
                                            onClick={e => {
                                                e.preventDefault();
                                                this.setState({ extraState: !this.state.extraState });
                                            }}>
                                            <i className="bx bx-file mr-2"></i>{this.props.t('Extra pages')}  <div className="arrow-down"></div>
                                        </Link>
                                        <div className={classname("dropdown-menu", { show: this.state.extraState })}>
                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ invoiceState: !this.state.invoiceState });
                                                    }}>
                                                   {this.props.t('Invoices')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.invoiceState })}>
                                                    <Link to="invoices-list" className="dropdown-item">{this.props.t('Invoice List')}</Link>
                                                    <Link to="invoices-detail" className="dropdown-item">{this.props.t('Invoice Detail')}</Link>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <Link to="/#" className="dropdown-item dropdown-toggle arrow-none"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ authState: !this.state.authState });
                                                    }}>
                                                  {this.props.t('Authentication')}   <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.authState })}>
                                                    <Link to="pages-login" className="dropdown-item">{this.props.t('Login')}</Link>
                                                    <Link to="pages-register" className="dropdown-item">{this.props.t('Register')}</Link>
                                                    <Link to="pages-forget-pwd" className="dropdown-item">{this.props.t('Forget Password')}</Link>
                                                    <Link to="auth-lock-screen" className="dropdown-item">{this.props.t('Lock Screen')}</Link>
                                                </div>
                                            </div>

                                            <div className="dropdown">
                                                <Link className="dropdown-item dropdown-toggle arrow-none" to="#"
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        this.setState({ utilityState: !this.state.utilityState });
                                                    }}>
                                                    {this.props.t('Utility')} <div className="arrow-down"></div>
                                                </Link>
                                                <div className={classname("dropdown-menu", { show: this.state.utilityState })}>
                                                    <Link to="pages-starter" className="dropdown-item">{this.props.t('Starter Page')}</Link>
                                                    <Link to="pages-maintenance" className="dropdown-item">{this.props.t('Maintenance')}</Link>
                                                    <Link to="pages-comingsoon" className="dropdown-item">{this.props.t('Coming Soon')}</Link>
                                                    <Link to="pages-timeline" className="dropdown-item">{this.props.t('Timeline')}</Link>
                                                    <Link to="pages-faqs" className="dropdown-item">{this.props.t('FAQs')}</Link>
                                                    <Link to="pages-pricing" className="dropdown-item">{this.props.t('Pricing')}</Link>
                                                    <Link to="pages-404" className="dropdown-item">{this.props.t('Error 404')}</Link>
                                                    <Link to="pages-500" className="dropdown-item">{this.props.t('Error 500')}</Link>
                                                </div>
                                            </div>
                                        </div>
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
