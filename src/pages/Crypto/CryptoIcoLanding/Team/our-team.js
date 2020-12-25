import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, UncontrolledTooltip, CardFooter  } from "reactstrap";

//Slider
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

//Import Images
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import avatar5 from "../../../../assets/images/users/avatar-5.jpg";
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";


class OurTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates : [
                { imgUrl : avatar2, name : "Mark Hurley", designation : "CEO & Lead",
                    socials : [
                        { id : 1, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                        { id : 2, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                        { id : 3, icon : "mdi mdi-google", title : "Google", url : "#" },
                    ]
                },
                { imgUrl : avatar3, name : "Calvin Smith", designation : "Blockchain developer",
                    socials : [
                        { id : 4, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                        { id : 5, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                        { id : 6, icon : "mdi mdi-google", title : "Google", url : "#" },
                    ]
                },
                { imgUrl : avatar8, name : "Vickie Sample", designation : "Designer",
                    socials : [
                        { id : 7, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                        { id : 8, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                        { id : 9, icon : "mdi mdi-google", title : "Google", url : "#" },
                    ]
                },
                { imgUrl : avatar5, name : "Vickie Sample", designation : "Designer",
                    socials : [
                        { id : 10, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                        { id : 11, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                        { id : 12,icon : "mdi mdi-google", title : "Google", url : "#" },
                    ]
                },
                { imgUrl : avatar1, name : "Alma Farley", designation : "App developer",
                    socials : [
                        { id : 13, icon : "mdi mdi-facebook", title : "Facebook", url : "#" },
                        { id : 14, icon : "mdi mdi-linkedin", title : "Linkedin", url : "#" },
                        { id : 15, icon : "mdi mdi-google", title : "Google", url : "#" },
                    ]
                },
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
                <section className="section" id="team">
                    <Container>
                        <Row>
                            <Col lg="12">
                                <div className="text-center mb-5">
                                    <div className="small-title">Team</div>
                                    <h4>Meet our team</h4>
                                </div>
                            </Col>
                        </Row>
                        

                        <Col lg="12">
                            <OwlCarousel
                                className="owl-theme events navs-carousel"
                                items={4}
                                loop={true}
                                margin={24}
                                nav={false}
                                dots={false}
                                navText
                                responsive = {this.state.responsive}
                            >
                                {
                                    this.state.candidates.map((candidate, key) =>
                                    <div className="item" key={key}>
                                    <Card className="text-center team-box">
                                        <CardBody>
                                            <div>
                                                <img src={candidate.imgUrl} alt="" className="rounded"/>
                                            </div>
            
                                            <div className="mt-3">
                                                <h5>{candidate.name}</h5>
                                                <p className="text-muted mb-0">{candidate.designation}</p>
                                            </div>
                                        </CardBody>
                                        <CardFooter className="bg-transparent border-top">
                                            <div className="d-flex mb-0 team-social-links">
                                                {
                                                    candidate.socials.map((social, key) =>
                                                        <div className="flex-fill" key={key}>
                                                            <a href={social.url} id={"social" + social.id}>
                                                                <i className={social.icon}></i>
                                                            </a>
                                                            <UncontrolledTooltip placement="top" target={"social" + social.id}>
                                                                {social.title}
                                                            </UncontrolledTooltip>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </div>
                                    )
                                }
                            </OwlCarousel>
                        </Col>
                        
                    </Container>
                    
                </section>
            </React.Fragment>
        );
    }
}

export default OurTeam;