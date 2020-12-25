import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class RoadMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events : [
                { id : 1, date : "December, 2019", title : "ICO Platform Idea", desc : "It will be as simple as occidental in fact it will be Cambridge" },
                { id : 2, date : "January, 2020", title : "Research on project", desc : "To an English person, it will seem like simplified English existence." },
                { id : 3, date : "February, 2020", title : "ICO & Token Design", desc : "For science, music, sport, etc, Europe uses the same vocabulary." },
                { id : 4, date : "March, 2020", title : "ICO Launch Platform", desc : "New common language will be more simple than existing." },
                { id : 5, date : "April, 2020", title : "Token sale round 1", desc : "It will be as simple as occidental in fact it will be Cambridge" },
                { id : 6, date : "May, 2020", title : "Token sale round 2", desc : "To an English person, it will seem like simplified English existence." }
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
    }
    
    render() {
        return (
            <React.Fragment>
                <section className="section bg-white" id="roadmap">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <div className="small-title">Timeline</div>
                                    <h4>Our Roadmap</h4>
                                </div>
                            </Col>
                        </Row>

                        <Row className="mt-4">
                            <Col lg="12">
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
                                        {
                                            this.state.events.map((event, key) =>
                                                <div className={event.id === 3 ? "item event-list active" : "item event-list"} key={key} style={{width : 279}}>
                                                    <div>
                                                        <div className="event-date">
                                                            <div className="text-primary mb-1">{event.date}</div>
                                                            <h5 className="mb-4">{event.title}</h5>
                                                        </div>
                                                        <div className="event-down-icon">
                                                            <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"></i>
                                                        </div>

                                                        <div className="mt-3 px-3">
                                                            <p className="text-muted">{event.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </OwlCarousel>
                                </div>

                            </Col>
                        </Row>
                        
                    </Container>
                    
                </section>
            </React.Fragment>
        );
    }
}

export default RoadMap;