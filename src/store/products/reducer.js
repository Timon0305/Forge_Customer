import {GET_PRODUCT} from "./actionType";

const initialState = {
    products: []
};

const Products = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT:
            state = {
                ...state,
                products: [...action.payload.product]
            };
            break;
        default:
            state = { ...state };
            break;
    }
    return state;
};

export default Products;