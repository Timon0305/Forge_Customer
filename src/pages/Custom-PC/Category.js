import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import {Link} from "react-router-dom";
import useViewModel from "./props";

const Category = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>
            <Dropdown isOpen={vm.categoryMenu} toggle={vm.menuToggle} className="d-inline-block" >
                <DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"/>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a" href="#">
                        <i className="bx bx-user font-size-16 align-middle mr-1"/>
                        asdf
                    </DropdownItem>
                    <DropdownItem tag="a" href="/crypto-wallet">
                        <i className="bx bx-wallet font-size-16 align-middle mr-1"/>
                       asdf
                    </DropdownItem>
                    <DropdownItem tag="a" href="#">
                        <span className="badge badge-success float-right mt-1">5</span><i className="bx bx-wrench font-size-17 align-middle mr-1"/>
                        adsf
                    </DropdownItem>
                    <DropdownItem tag="a" href="auth-lock-screen">
                        <i className="bx bx-lock-open font-size-16 align-middle mr-1"/>asdf
                    </DropdownItem>
                    <div className="dropdown-divider"/>
                    <Link to="/logout" className="dropdown-item">
                        <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"/>
                        <span>asdf</span>
                    </Link>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
};

export default Category;