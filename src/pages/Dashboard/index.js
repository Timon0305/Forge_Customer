import React from "react";
import { Container, Row, Col} from "reactstrap";

import { withNamespaces } from 'react-i18next';
import Video from "./Video";
import Prebuild from "./Prebuild";
import CustomPC from "./CustomPC";
import CustomKit from "./CustomKit";
import CustomReview from "./CustomReview";
import GamePlay from "./GamePlay";

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className="page-content" style={styles.container}>
                <Container fluid>

                    <Row>
                        <Col xl="12" style={styles.videoStyle}>
                            <Video />
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col lg="12" style={styles.videoStyle}>
                            <Prebuild />
                        </Col>
                    </Row>

                    <Row>
                        <Col xl="6">
                            <CustomPC />
                        </Col>
                        <Col xl="6">
                            <CustomKit />
                        </Col>

                    </Row>

                    <Row className='mt-3'>
                        <Col xl="6">
                            <CustomReview />
                        </Col>
                        <Col xl="6">
                            <GamePlay />
                        </Col>

                    </Row>

                </Container>
            </div>
        </React.Fragment>
    )
};

export default withNamespaces()(Dashboard);


const styles = {
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '0px'
    },
    videoStyle : {
        paddingLeft: '0px',
        paddingRight: '0px',
    }
};