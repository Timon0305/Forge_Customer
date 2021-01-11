import React from 'react';
import { Container, Row, Col, Card, CardBody, Table} from "reactstrap";
import { Link } from "react-router-dom";
import useViewModel from './props';
import {Breadcrumbs} from "../../components/Common/Breadcrumb";

export const List = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <div className="list-content">
                <Container fluid>
                    <Breadcrumbs/>
                    <Row>
                        <Col xs={12}>
                            <div className='pt-4 pb-4'>
                                <h1 className='text-center text-white'>System Build</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl="1">
                        </Col>
                        <Col lx="8">
                            <Card>
                                <CardBody>
                                    <div className="table-responsive">
                                        <Table className="table table-centered mb-0 table-nowrap">
                                            <thead className="thead-light">
                                            <tr>
                                                <th>Component</th>
                                                <th>Selection</th>
                                                <th>Base</th>
                                                <th>Tax[10%]</th>
                                                <th colSpan="1">Price</th>
                                                <th colSpan="1">Buy/Cancel</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                vm.productList.map((product) =>
                                                    <tr key={product.key? product.key : product._id}>
                                                        <td>
                                                            <h3 className="font-size-14 text-truncate">
                                                                <Link to={product.component} className="text-dark">
                                                                    <u>
                                                                        {product.component}
                                                                    </u>
                                                                </Link>
                                                            </h3>
                                                        </td>
                                                        <td style={{width: '50%'}}>
                                                            <img src={product.image} alt="product-img" title="product-img" className="avatar-md" />
                                                            <span className="font-size-14 text-truncate">
                                                                <b>{product.name}</b>
                                                            </span>
                                                        </td>
                                                        <td>
                                                             {product.price}
                                                        </td>
                                                        <td>
                                                            $ {Math.floor(parseFloat(product.price.split('$')[1]) * 10) /100 }
                                                        </td>
                                                        <td>
                                                            $ {Math.floor((parseFloat(product.price.split('$')[1]) + Math.floor(parseFloat(product.price.split('$')[1]) * 10) /100) *100)/100}
                                                        </td>
                                                        <td>
                                                            <span className='btn btn-sm action-icon text-danger'>
                                                                <i className="mdi mdi-close font-size-18"/>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            }

                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row className="mt-4">
                                        <Col sm="12">
                                            <div className="text-right mt-2 mt-sm-0">
                                                    <i className="mdi mdi-cart-arrow-right mr-1"/> Checkout
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl="1">
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};