import React from 'react';
import {Container, Row, Col, Card, Input, Label, CardBody, Button} from "reactstrap";
import {Link} from "react-router-dom";
import Nouislider from "nouislider-react";
import classes from '../../Dashboard/BackgroundVideo.module.css';
import useViewModel from './props'
import {Breadcrumbs} from "../../../components/Common/Breadcrumb";
const noImage = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';

export const Motherboard = (props) => {
    const vm = useViewModel(props);

    return (
        <React.Fragment>
            <div className="page-content subHeaderContainer">
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
                                                    range={{ min: 0, max: 2387 }}
                                                    tooltips={true} start={[0, 2387]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterPrice(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Socket / CPU</h5>
                                                <div className='filterHidden'>
                                                    {
                                                        vm.socket.map((item, index) =>
                                                            <Socket
                                                                key={index}
                                                                id={item._id}
                                                                status={item.status}
                                                                name={item.name}
                                                                checked={() => vm.filterSocket(item.name)}
                                                            />
                                                        )
                                                    }
                                                </div>
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

                                            <div className="mt-1 mb-2">
                                                <h5 className='text-white mt-3 mb-4'>Memory Max</h5>
                                                <br/>
                                                <Nouislider
                                                    range={{ min: 2, max: 2000 }}
                                                    tooltips={true} start={[2, 2000]}
                                                    connect
                                                    animate={true}
                                                    onSlide={(data) => vm.filterMemoryMax(data)}
                                                />
                                            </div>
                                            <hr/>
                                            <div>
                                                <h5 className='text-white mt-3'>Color</h5>
                                                <div className='filterHidden'>
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
                                            </div>
                                            <hr/>
                                        </div>
                                    </Col>
                                    <Col lg={7} md={8}>
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
                                                vm.products.map((item, index) =>
                                                    <Col xl="4" sm="6" key={index}>
                                                        <Products

                                                            id={item._id}
                                                            name={item.name}
                                                            image={item.image}
                                                            socket={item.socket}
                                                            factor={item.factor}
                                                            max={item.max}
                                                            slots={item.slots}
                                                            color={item.color}
                                                            price={item.price}
                                                            addToCart={() => vm.addProduct(item._id)}
                                                        />
                                                    </Col>
                                                )
                                            }
                                        </Row>
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

export const Socket = ({id, name, status, checked}) => {
    return (
        <React.Fragment>
            <div className="custom-control custom-checkbox mt-2">
                <Input
                    type="radio"
                    className="custom-control-input font-size-24"
                    id={id}
                    name='socket'
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

export const Products = ({id, name, image, socket, factor, max, slots, color, price, addToCart}) => {
    return (
        <React.Fragment>
            <Card style={styles.cardBorder}>
                <CardBody>
                    <div className="product-img position-relative">
                        {
                            image === '/static/forever/img/no-image.png' ?
                                <img src={noImage} alt="" className="img-fluid mx-auto d-block" style={styles.image} />
                                :
                                <img src={image} alt="" className="img-fluid mx-auto d-block" style={styles.image} />
                        }
                    </div>
                    <div className="mt-4 text-center">
                        <h5 className="mb-3 text-truncate">
                            {name}
                        </h5>
                        <div className="text-muted mb-1">
                            {'Socket/CPU : ' + socket}
                        </div>
                        <div className="text-muted mb-1">
                            {'Form Factor : ' + factor}
                        </div>
                        <div className="text-muted mb-1">
                            {'Memory Max : ' + max}
                        </div>
                        <div className="text-muted mb-1">
                            {'Memory Slots : ' + slots}
                        </div>
                        <div className="text-muted mb-1">
                            {'Color : ' + color}
                        </div>
                        <h5 className="my-0">
                            {'Price : '}
                            {
                                price.length ?
                                    <b>{price}</b>
                                    :
                                    <del>Out of Stock</del>
                            }
                        </h5>
                    </div>
                    <Button
                        className='mt-2 btn btn-block btn-sm btn-success'
                        onClick={addToCart}
                    >Add</Button>
                </CardBody>
            </Card>
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