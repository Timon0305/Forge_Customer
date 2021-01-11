import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToList} from "../../../store/list/actions";
function useViewModel(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetchData();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchSoftware();
        setProductLength(res['data']['software'].length);
        setProducts(res['data']['software']);
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterSoftware(value);
        setProductLength(res['data']['software'].length);
        setProducts(res['data']['software'])
    };


    const getCartProduct = () => {
        let product = JSON.parse(sessionStorage.getItem('listItems')) === null
            ? [] :
            JSON.parse(sessionStorage.getItem('listItems'));
        setListProduct(product);
    };

    const addProduct = (id) => {
        let newComponent = 'cpu';
        for (let item of products) {
            if (item._id === id) {
                if (listProduct.length === 0) {
                    item.component = newComponent;
                    listProduct.push(item);
                } else {
                    let foundIndex =  listProduct.findIndex(x => x.component === newComponent);
                    if (foundIndex === -1){
                        item.component = newComponent;
                        listProduct.push(item)
                    } else {
                        item.component = newComponent;
                        listProduct[foundIndex] = item;
                    }
                }

            }
        }
        sessionStorage.setItem('listItems', JSON.stringify(listProduct));
        dispatch(addToList(listProduct));
        props.history.push('/products/list')
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        listProduct, setListProduct,
        filterProducts,
        addProduct
    }
}

export default useViewModel;