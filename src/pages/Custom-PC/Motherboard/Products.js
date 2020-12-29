import React from 'react';
import { Row, Col, Card, CardBody, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import useViewModel from "./props";


const Products = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <h2 className='text-white text-center pt-4'>
                        Choose A Motherboard
                    </h2>
                    <div className='pl-3 text-white text-left font-size-20'>
                        {vm.productLength + ' Compatible Products'}
                    </div>
                    <hr/>
                </Col>
            </Row>
            <Row className='mt-4 pl-3 pr-3'>
                {
                    vm.products.map((product, key) =>
                        <Col xl="4" sm="6" key={"_col_" + key}>
                            <Card style={styles.cardBorder}>
                                <CardBody>
                                    <Link to={"/ecommerce-product-detail/" + product.id} className="text-dark">
                                        <div className="product-img position-relative">
                                            <img src={product.image} alt="" className="img-fluid mx-auto d-block" style={styles.image} />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h5 className="mb-3 text-truncate">
                                                {product.name}
                                                </h5>
                                            <div className="text-muted mb-1">
                                                {'Core Count : ' + product.coreCount}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Core Clock : ' + product.coreClock}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Boost Clock : ' + product.boostClock}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'TDP : ' + product.tdp}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Integrated Graphics : ' +  product.graphics}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'SMT : ' + product.smt}
                                            </div>
                                            <h5 className="my-0">
                                                {'Price : '}
                                                {
                                                    product.price.length ?
                                                        <b>{product.price}</b>
                                                        :
                                                        <del>Out of Stock</del>
                                                }
                                            </h5>
                                        </div>
                                    </Link>
                                    <Button className='mt-2 btn btn-block btn-sm btn-success'>Add</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>

            {/*<Row>*/}
                {/*<Col lg="12">*/}
                    {/*<Pagination className="pagination pagination-rounded justify-content-center">*/}
                        {/*<PaginationItem disabled>*/}
                            {/*<PaginationLink previous href="#" />*/}
                        {/*</PaginationItem>*/}
                        {/*<PaginationItem>*/}
                            {/*<PaginationLink next href="#" />*/}
                        {/*</PaginationItem>*/}
                    {/*</Pagination>*/}
                {/*</Col>*/}
            {/*</Row>*/}
        </React.Fragment>
    )
};

export default Products

const styles = {
    image : {
        width: '200px',
        height: '200px'
    },
    cardBorder: {
        border: '4px solid gray'
    }
};