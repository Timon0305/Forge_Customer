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
                {
                    vm.filter.map((item, index) =>
                        <div className="custom-control custom-checkbox mt-2" key={index}>
                            <Input
                                type="radio"
                                className="custom-control-input font-size-24"
                                id={item.id}
                                name='setDistance'
                                defaultChecked={item.status}
                                onChange={() => vm.filterProducts(item.name)}
                            />
                            <Label className="custom-control-label text-white" htmlFor={item.id} >{item.name}</Label>
                        </div>
                    )
                }

            </div>
            <Cart/>

        </React.Fragment>
    )
};

export default Filters;

