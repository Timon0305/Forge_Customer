import React from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    Form,
    Label,
    Input,
    Nav,
    NavItem,
    NavLink,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button
} from 'reactstrap';
import Nouislider from "nouislider-react";
import useViewModel from './props';
import './custom.scss';

const Filter = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>

            <div className="mt-4 pt-3 text-sm-center text-center text-md-center text-lg-left">
                <h3 className="text-white mb-3">MANUFACTURERS</h3>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="0" className="custom-control-input font-size-24 " id="productdiscountCheck1" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck1">Less than 10%</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="1" className="custom-control-input" id="productdiscountCheck2" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck2">10% or more</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="2" className="custom-control-input" id="productdiscountCheck3" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck3">20% or more</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="3" className="custom-control-input" id="productdiscountCheck4" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck4">30% or more</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="4" className="custom-control-input" id="productdiscountCheck5" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck5">40% or more</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="5" className="custom-control-input" id="productdiscountCheck6" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck6">50% or more</Label>
                </div>
            </div>

            <Card style={styles.cart}>
                <CardBody>
                    <div className="table-responsive cart">
                        <Table className="table mb-0">
                            <thead>
                                <tr>
                                    <th>PARTS PRICE</th>
                                    <th>TAXES</th>
                                    <th>BUILD FEE</th>
                                    <th>FINAL TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>$ 123</td>
                                    <td>$ 1,857</td>
                                    <td>$ 1,857</td>
                                    <td>$ 1,857</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="text-center">
                        <div className="text-center mt-2">
                            <Button
                                color="primary"
                                className="waves-effect waves-light btn btn-lg text-white cartButton"
                            >
                                <i className='mdi mdi-cart'/>
                                &nbsp; BUY NOW
                            </Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    )
};

export default Filter;

const styles = {
    cart : {
        position: 'fixed',
        zIndex: '100',
        bottom: 0,
        background: 'black',
        border: '3px solid #1e80d1'
    },
    tHead: {
        borderTop: 'none!important'
    }
};