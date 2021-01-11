import React from 'react';
import { Container, Row, Col, Card, CardBody, Table, Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
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
                                                <th>Tax</th>
                                                <th colSpan="2">Price</th>
                                                <th colSpan="2">Buy/Cancel</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                vm.productList.map((product) =>
                                                    <tr key={product.key? product.key : product._id}>
                                                        <td>
                                                            <img src={product.img} alt="product-img" title="product-img" className="avatar-md" />
                                                        </td>
                                                        <td>
                                                            <h5 className="font-size-14 text-truncate"><Link to={"/ecommerce-product-detail/" + product.id} className="text-dark">{product.name}</Link></h5>
                                                            <p className="mb-0">Color : <span className="font-weight-medium">{product.color}</span></p>
                                                        </td>
                                                        <td>
                                                            $ {product.price}
                                                        </td>
                                                        <td>
                                                            <div style={{ width: "120px" }}>
                                                                <InputGroup>
                                                                    <InputGroupAddon addonType="prepend">
                                                                        <Button color="primary" onClick={() => { this.countUP(product.id, product.data_attr) }}>+</Button>
                                                                    </InputGroupAddon>
                                                                    <Input type="text" value={product.data_attr} name="demo_vertical" readOnly/>
                                                                    <InputGroupAddon addonType="append">
                                                                        <Button color="primary" onClick={() => { this.countDown(product.id, product.data_attr) }}>-</Button>
                                                                    </InputGroupAddon>
                                                                </InputGroup>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            $ {product.total}
                                                        </td>
                                                        <td>
                                                            <Link to="#" onClick={() => this.removeCartItem(product.id)} className="action-icon text-danger"> <i className="mdi mdi-trash-can font-size-18"></i></Link>
                                                        </td>
                                                    </tr>
                                                )
                                            }


                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row className="mt-4">
                                        <Col sm="6">
                                            <Link to="/ecommerce-products" className="btn btn-secondary">
                                                <i className="mdi mdi-arrow-left mr-1"/> Continue Shopping </Link>
                                        </Col>
                                        <Col sm="6">
                                            <div className="text-sm-right mt-2 mt-sm-0">
                                                <Link to="/ecommerce-checkout" className="btn btn-success">
                                                    <i className="mdi mdi-cart-arrow-right mr-1"/> Checkout </Link>
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