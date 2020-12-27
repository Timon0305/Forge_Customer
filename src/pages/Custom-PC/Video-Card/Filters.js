import React from 'react';
import {
    Label,
    Input,
} from 'reactstrap';
import useViewModel from './props';
import './../custom.scss';
import Cart from "../Cart";

const Filters = (props) => {
    const vm = useViewModel(props);
    return (
        <React.Fragment>

            <div className="mt-4 pt-3 text-sm-center text-center text-md-center text-lg-left">
                <h3 className="text-white mb-3">MANUFACTURERS</h3>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="0" className="custom-control-input font-size-24 " id="productdiscountCheck1" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck1">All</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="1" className="custom-control-input" id="productdiscountCheck2" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck2">AMD</Label>
                </div>
                <div className="custom-control custom-checkbox mt-2">
                    <Input type="checkbox" value="2" className="custom-control-input" id="productdiscountCheck3" />
                    <Label className="custom-control-label text-white" htmlFor="productdiscountCheck3">Intel</Label>
                </div>
            </div>
            <Cart/>

        </React.Fragment>
    )
};

export default Filters;

