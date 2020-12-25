import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Breadcrumb
import Breadcrumbs from '../../components/Common/Breadcrumb';

//Import Horizontal list
import LiHorizontalTimeline from "./li-horozontal-timeline";

//Import Vertical list
import LiVerticalTimeline from "./li-vertical-timeline";

class PagesTimeline extends Component {
    state = {
        events : [
            { id : 1, date : "December, 2019", title : "First event", desc : "It will be as simple as occidental in fact it will be Cambridge" },
            { id : 2, date : "January, 2020", title : "Second event", desc : "To an English person, it will seem like simplified English existence." },
            { id : 3, date : "February, 2020", title : "Third event", desc : "For science, music, sport, etc, Europe uses the same vocabulary." },
            { id : 4, date : "March, 2020", title : "Fourth event", desc : "New common language will be more simple than existing." },
            { id : 5, date : "April, 2020", title : "Fifth event", desc : "It will be as simple as occidental in fact it will be Cambridge" },
            { id : 6, date : "May, 2020", title : "Sixth event", desc : "To an English person, it will seem like simplified English existence." }
        ],
        statuses: [
            { id: 1, stausTitle: "Ordered", iconClass: "bx-copy-alt", description: "New common language will be more simple than existing." },
            { id: 2, stausTitle: "Packed", iconClass: "bx-package", description: "To an English person, it will seem like simplified English existence." },
            { id: 3, stausTitle: "Shipped", iconClass: "bx-car", description: "It will be as simple as occidental in fact it will be Cambridge" },
            { id: 4, stausTitle: "Delivered", iconClass: "bx-badge-check", description: "To an English person, it will seem like simplified English existence." },
        ],
        responsive: {
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
        },
    }
    render() {
        return (
            <React.Fragment>
                <div className="page-content">
                    <div className="container-fluid">

                        {/* Render Breadcrumbs */}
                        <Breadcrumbs title="Utility" breadcrumbItem="Timeline" />

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">Horizontal Timeline</CardTitle>
                                        <div className="hori-timeline">
                                        <OwlCarousel
                                            className="owl-theme events navs-carousel"
                                            items={4}
                                            loop={false}
                                            margin={0}
                                            nav={true}
                                            dots={false}
                                            navText={["<",">"]}
                                            responsive = {this.state.responsive}
                                        >
                                                {/* Render Horizontal Timeline Events */}
                                                {
                                                    this.state.events.map((event, key) =>
                                                        <LiHorizontalTimeline event={event} key={"_key_" + key} />
                                                    )
                                                }
                                        </OwlCarousel>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg="12">
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-5">Vertical Timeline</CardTitle>
                                        <div className="">
                                            <ul className="verti-timeline list-unstyled">
                                                {/* Render Horizontal Timeline Events */}
                                                {
                                                    this.state.statuses.map((status, key) =>
                                                        <LiVerticalTimeline status={status} key={"_status_" + key} />
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default PagesTimeline;