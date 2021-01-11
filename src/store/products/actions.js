import RestApi from '../../service/RestApi';
import {GET_PRODUCT} from "./actionType";

export const getProducts = (products) => {
    return {
        type: GET_PRODUCT,
        payload: {products}
    }
};

export function getProduct() {
    return function (dispatch) {
        return RestApi.fetchCPU()
            .then(res => {
                console.log(res)
            })
    }
}