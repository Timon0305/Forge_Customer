import React from 'react';
import {Button, Card, CardBody, Table} from "reactstrap";

const Cart = () => {
    return (
        <React.Fragment>
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

export default Cart

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