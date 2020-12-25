import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, Form, Label, Input, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';

import useViewModel from "./props";
const Products = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <Row className='mt-4 pl-3 pr-3'>
                {
                    vm.products.map((product, key) =>
                        <Col xl="4" sm="6" key={"_col_" + key}>
                            <Card>
                                <CardBody>
                                    <div className="product-img position-relative">
                                        {
                                            product.isOffer
                                                ? <div className="avatar-sm product-ribbon">
                                                    <span className="avatar-title rounded-circle  bg-primary">
                                                        {product.offer + "%"}
                                                    </span>
                                                </div>
                                                : null
                                        }

                                        <img src={product.image} alt="" className="img-fluid mx-auto d-block" />
                                    </div>
                                    <div className="mt-4 text-center">
                                        <h5 className="mb-3 text-truncate"><Link to={"/ecommerce-product-detail/" + product.id} className="text-dark">{product.name} </Link></h5>
                                        <div className="text-muted mb-3">
                                            <StarRatings
                                                rating={product.rating}
                                                starRatedColor="#F1B44C"
                                                starEmptyColor="#2D363F"
                                                numberOfStars={5}
                                                name='rating'
                                                starDimension="14px"
                                                starSpacing="3px"
                                            />
                                        </div>
                                        <h5 className="my-0"><span className="text-muted mr-2"><del>${product.oldPrice}</del></span> <b>${product.newPrice}</b></h5>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>

            <Row>
                <Col lg="12">
                    <Pagination className="pagination pagination-rounded justify-content-center">
                        <PaginationItem disabled>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                                5
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                    </Pagination>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Products