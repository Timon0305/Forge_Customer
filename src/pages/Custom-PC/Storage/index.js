import React from 'react';
import {Container, Row, Col, Card, Input, Label, CardBody, Button} from "reactstrap";
import {Link} from "react-router-dom";
import classes from '../../Dashboard/BackgroundVideo.module.css';
import useViewModel from "./props";
import Nouislider from "nouislider-react";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
const noImage = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';

export const Storage = (props) => {
    const vm = useViewModel(props);

    return (
        <React.Fragment>
            <div className="page-content" style={styles.container}>
                <Container fluid style={styles.contentPadding}>
                    <Row className='container-fluid' style={styles.subHeader}>
                        <Breadcrumbs />
                    </Row>
                    <Row>
                        <Col xs={12} style={styles.paddingStyle}>
                            <Card className={classes.customerCardBackground}>
                                <Row>
                                    <Col lg={1} md={0} />
                                    <Col lg={3} md={4}>
                                        <div className="pt-3 text-left m-5">
                                            <h3 className="text-white mb-3">Filters</h3>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>MANUFACTURER</h5>
                                                <div className='filterHidden'>
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
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Price</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 0, max: 6399 }}
                                                    tooltips={true} start={[0, 6399]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterPrice(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Capacity</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 8, max: 18000 }}
                                                    tooltips={true} start={[8, 18000]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterCapacity(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Type</h5>
                                                <div className='filterHidden'>
                                                    {
                                                        vm.types.map((item, index) =>
                                                            <Type
                                                                key={index}
                                                                id={item._id}
                                                                status={item.status}
                                                                name={item.name}
                                                                checked={() => vm.filterType(item.name)}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Cache</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 2, max: 4096 }}
                                                    tooltips={true} start={[2, 4096]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterCache(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Form Factor</h5>
                                                <div className='filterHidden'>
                                                    {
                                                        vm.factor.map((item, index) =>
                                                            <Factor
                                                                key={index}
                                                                id={item._id}
                                                                status={item.status}
                                                                name={item.name}
                                                                checked={() => vm.filterFactor(item.name)}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <hr/>
                                        </div>
                                    </Col>
                                    <Col lg={7} md={8}>
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

export const Type = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='type'
                    defaultChecked={status}
                    onChange={checked}
                />
                <Label className="custom-control-label text-white" htmlFor={id} >{name}</Label>
            </div>

        </React.Fragment>
    )
};

export const Factor = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='factor'
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
                        Choose A Storage
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
                                                {'Capacity : ' + product['capacity']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Price/GB : ' + product['gbprice']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Type : ' + product['type']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Cache : ' + product['cache']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Form Factor : ' +  product['factor']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Interface : ' + product['interface']}
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
    contentPadding: {
        padding: '0'
    },
    contentBackground: {
        background: 'black'
    },
    container : {
        paddingLeft: '0px',
        paddingRight: '0px',
        marginTop: '44px'
    },
    subHeader: {
        width: '100%',
        margin: 'auto',
        padding: '0',
        background: 'black'
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