import React from 'react';
import {Col, Row} from "reactstrap";
import useViewModel from "./props";

const Category = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <h2 className='text-white text-center pt-4'>
                        CPU
                    </h2>
                    <hr/>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Category;