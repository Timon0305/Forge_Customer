import React from 'react';
import {Container, Row, Col, Card, Input, Label, CardBody, Button} from "reactstrap";
import {Link} from "react-router-dom";
import CustomVideo from "./../Custom-Video";
import classes from '../../Dashboard/BackgroundVideo.module.css';
import useViewModel from "./props";
import Nouislider from "nouislider-react";
const noImage = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';

export const Memory = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <div className="page-content" style={styles.container}>
                <Container fluid>
                    <Row>
                        <Col xs='12' style={styles.videoStyle}>
                            <CustomVideo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} style={styles.paddingStyle}>
                            <Card className={classes.customerCardBackground}>
                                <Row>
                                    <Col lg={1}/>
                                    <Col lg={2} className='m-5'>
                                        <div className="pt-3 text-sm-center text-center text-md-center text-lg-left">
                                            <h3 className="text-white mb-3">Filters</h3>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>MANUFACTURER</h5>
                                                {
                                                    vm.manufacturer.map((item, index) =>
                                                        <Manufacturer
                                                            key={index}
                                                            id={item._id}
                                                            status={item.status}
                                                            name={item.name}
                                                            checked={() => vm.filterManufacturer(item.name)}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Price</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 0, max: 2812 }}
                                                    tooltips={true} start={[0, 2812]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterPrice(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Modules</h5>
                                                {
                                                    vm.module.map((item, index) =>
                                                        <Module
                                                            key={index}
                                                            id={item._id}
                                                            status={item.status}
                                                            name={item.name}
                                                            checked={() => vm.filterModule(item.name)}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Color</h5>
                                                {
                                                    vm.color.map((item, index) =>
                                                        <Color
                                                            key={index}
                                                            id={item._id}
                                                            status={item.status}
                                                            name={item.name}
                                                            checked={() => vm.filterColor(item.name)}
                                                        />
                                                    )
                                                }
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Speed</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 333, max: 5100 }}
                                                    tooltips={true} start={[333, 5100]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterSpeed(data)}
                                                />
                                            </div>
                                            <hr/>
                                        </div>
                                    </Col>
                                    <Col lg={8}>
                                        <Products
                                            products={vm.products}
                                            productLength={vm.productLength}
                                        />
                                    </Col>
                                    <Col lg={1}/>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
};

export const Manufacturer = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='manufacturer'
                    defaultChecked={status}
                    onChange={checked}
                />
                <Label className="custom-control-label text-white" htmlFor={id} >{name}</Label>
            </div>

        </React.Fragment>
    )
};

export const Module = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='module'
                    defaultChecked={status}
                    onChange={checked}
                />
                <Label className="custom-control-label text-white" htmlFor={id} >{name}</Label>
            </div>

        </React.Fragment>
    )
};

export const Color = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='color'
                    defaultChecked={status}
                    onChange={checked}
                />
                <Label className="custom-control-label text-white" htmlFor={id} >{name}</Label>
            </div>

        </React.Fragment>
    )
};

export const Products = ({products, productLength}) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs={12}>
                    <h2 className='text-white text-center pt-4'>
                        Choose A Memory
                    </h2>
                    <div className='pl-3 text-white text-left font-size-20'>
                        {productLength + ' Compatible Products'}
                    </div>
                    <hr/>
                </Col>
            </Row>
            <Row className='mt-4 pl-3 pr-3'>
                {
                    products.map((product, key) =>
                        <Col xl="4" sm="6" key={"_col_" + key}>
                            <Card style={styles.cardBorder}>
                                <CardBody>
                                    <Link to={"/ecommerce-product-detail/" + product.id} className="text-dark">
                                        <div className="product-img position-relative">
                                            {
                                                product['image'] === '/static/forever/img/no-image.png' ?
                                                    <img src={noImage} alt="" className="img-fluid mx-auto d-block" style={styles.image} />
                                                    :
                                                    <img src={product['image']} alt="" className="img-fluid mx-auto d-block" style={styles.image} />
                                            }
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h5 className="mb-3 text-truncate">
                                                {product['name']}
                                            </h5>
                                            <div className="text-muted mb-1">
                                                {'Speed : ' + product['speed']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Modules : ' + product['modules']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Price / GB : ' + product['gbprice']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Color : ' + product['color']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'First Word Latency : ' +  product['flatency']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'CAS Latency : ' + product['clatency']}
                                            </div>
                                            <h5 className="my-0">
                                                {'Price : '}
                                                {
                                                    product['price'].length ?
                                                        <b>{product['price']}</b>
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
        </React.Fragment>
    )
};

const styles = {
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '0px'
    },
    videoStyle : {
        paddingLeft: '0px',
        paddingRight: '0px',
        maxHeight: '500px'
    },
    paddingStyle : {
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    image : {
        width: '200px',
        height: '200px'
    },
    cardBorder: {
        border: '4px solid gray'
    }
};