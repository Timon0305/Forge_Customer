import React, {Component} from "react";
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {Dropdown, DropdownToggle, DropdownMenu, Row, Col} from "reactstrap";
import SimpleBar from "simplebar-react";
import {withNamespaces} from 'react-i18next';
import {addToCart} from "../../../store/product/actions";

class CartMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            cartNum: 0,
            cartProduct: JSON.parse(sessionStorage.getItem('cartItems')) ? JSON.parse(sessionStorage.getItem('cartItems')) : props.products,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    render() {
        const cartProduct = JSON.parse(sessionStorage.getItem('cartItems')) ?
            JSON.parse(sessionStorage.getItem('cartItems')) :
            this.props.products;
        let cartNum = 0;
        for (let item of cartProduct) {
            cartNum += parseInt(item.quantity);
        }

        return (
            <React.Fragment>

                <Dropdown
                    isOpen={this.state.menu}
                    toggle={this.toggle}
                    className="dropdown d-inline-block"
                    tag="li"
                >
                    <DropdownToggle
                        className="btn header-item noti-icon waves-effect"
                        tag="button" id="page-header-notifications-dropdown">
                        {
                            cartNum > 0 ? (
                                <i className='mdi mdi-cart-minus'/>
                            ) : (
                                <i className='mdi mdi-cart-minus'/>
                            )
                        }
                        <span className="badge badge-light badge-pill"
                              style={styles.cartItem}>{cartNum}</span>
                    </DropdownToggle>

                    <DropdownMenu className="dropdown-menu dropdown-menu-lg p-0" right >
                        <div className="pt-3 pl-3 pr-3">
                            <Row className="align-items-center">
                                <Col>
                                    <h6 className="m-0 text-primary"> {this.props.t('My Carts')} </h6>
                                </Col>
                            </Row>
                        </div>
                        <hr/>
                        <SimpleBar style={styles.cartMenu}>
                            {
                                cartProduct.length !== 0 ? (
                                    cartProduct.map((cart, key) =>
                                        <Link to='/checkout'  key={key}>
                                            <div className='pl-3 text-reset cursor'>
                                                <div className="media">
                                                    <div className="avatar-xs mr-3">
                                                        <img src={cart.image}
                                                             alt={cart.image}
                                                             height={34}
                                                             width={34}
                                                             style={{borderRadius: '50%'}}/>
                                                    </div>
                                                    <Row className="align-items-center">
                                                        <Col>
                                                            <h6 className="mt-0 mb-1 text-primary">{cart.name}</h6>
                                                            <div className="font-size-12 text-muted">
                                                                <p className="mb-1">
                                                                    {
                                                                        cart['price'].length ?
                                                                            cart['price'] +  ' * ' +  cart.quantity :
                                                                            '$ ' + 0 + ' * ' + cart.quantity
                                                                    }
                                                                 </p>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    <div className="media-body">
                                                        <div className="col-auto text-right">
                                                            <p className='text-dark font-size-14'>
                                                                {
                                                                    cart['price'].length ?
                                                                        parseFloat(cart['price'].split('$')[1]) * parseInt(cart.quantity) :
                                                                        0
                                                                } $
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr/>
                                            </div>
                                        </Link>
                                    )
                                ) : (
                                    <div className=''>
                                        <h1 className='text-center text-primary cursor'>
                                            <i className='mdi mdi-cart-plus'/>
                                        </h1>
                                        <h5 className='text-primary text-center'>
                                            Your Cart is Empty
                                        </h5>
                                    </div>
                                )
                            }

                        </SimpleBar>
                        <div className="p-2 border-top">
                            <Link
                                className="btn btn-sm btn-link font-size-14 btn-block text-center"
                                to="#"
                            >
                                {" "}
                                {this.props.t('View all')}{" "}
                            </Link>
                        </div>
                    </DropdownMenu>
                </Dropdown>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    const { products } = state.Product;
    return { products };
};

export default withNamespaces()(connect(mapStateToProps, {addToCart})(CartMenu));

const styles = {
    cartItem : {
        border: '1px solid blue',
        padding: '5px',
        fontSize: '10px',
        background: 'yellow'
    },
    cartMenu : {
        maxHeight : '300px',
        overflow: 'scroll'
    }
};
