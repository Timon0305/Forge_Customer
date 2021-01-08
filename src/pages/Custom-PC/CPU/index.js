import React from 'react';
import {Button, CardBody, Container, Row, Col, Card, Input, Label} from "reactstrap";
import classes from '../../Dashboard/BackgroundVideo.module.css';
import useViewModel from "./props";
import Nouislider from "nouislider-react";
import '../custom.scss';
import {Breadcrumbs} from "../../../components/Common/Breadcrumb";
const noImage = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';

export const CPU = (props) => {
    const vm = useViewModel(props);

    return (
        <React.Fragment>
            <div className={"page-content subHeaderContainer"}>
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
                                            <div>
                                                <h5 className='text-white mt-3'>Series</h5>
                                                <div className='filterHidden'>
                                                    {
                                                        vm.series.map((item, index) =>
                                                            <Series
                                                                key={index}
                                                                id={item._id}
                                                                status={item.status}
                                                                name={item.name}
                                                                checked={() => vm.filterSeries(item.name)}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>CORE COUNT</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 1, max: 64 }}
                                                    tooltips={true} start={[1, 64]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterCount(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>CORE CLOCK</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 1.1, max: 4.7 }}
                                                    tooltips={true} start={[1.1, 4.7]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterClock(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Integrated Graphics</h5>
                                                <div className='filterHidden'>
                                                    {
                                                        vm.graphics.map((item, index) =>
                                                            <Graphics
                                                                key={index}
                                                                id={item._id}
                                                                status={item.status}
                                                                name={item.name}
                                                                checked={() => vm.filterGraphics(item.name)}
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
                                    <Col lg={1} md={0}/>
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

export const Series = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='series'
                    defaultChecked={status}
                    onChange={checked}
                />
                <Label className="custom-control-label text-white" htmlFor={id} >{name}</Label>
            </div>

        </React.Fragment>
    )
};

export const Graphics = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='graphics'
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
                        Choose A CPU
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
                                                {'Core Count : ' + product['coreCount']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Core Clock : ' + product['coreClock']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Boost Clock : ' + product['boostClock']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'TDP : ' + product['tdp']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'Integrated Graphics : ' +  product['graphics']}
                                            </div>
                                            <div className="text-muted mb-1">
                                                {'SMT : ' + product['smt']}
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