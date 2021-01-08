import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/product/actions";
function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [waterCooled, setWaterCooled] = useState([]);
    const [fanLess, setFanLess] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sCooled, setSCooled] = useState('All');
    const [sFanLess, setSFanLess] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getWaterCooled();
        getFanLess();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPUCooler();
        setProductLength(res['data']['cooler'].length);
        setProducts(res['data']['cooler'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.fetchCPUCoolerFilter();
        setManufacturer(res['data']['coolerFilter'])
    };

    const getWaterCooled = async () => {
        let res = await RestApi.getWaterCooled();
        setWaterCooled(res['data']['waterCooled'])
    };

    const getFanLess = async () => {
        let res = await RestApi.getFanLess();
        setFanLess(res['data']['fanLess'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCPUCooler(value, sCooled, sFanLess);
        let length = res['data']['cooler'].length;
        setSManufacturer(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterWaterCooled = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, value, sFanLess);
        let length = res['data']['cooler'].length;
        setSCooled(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterFanLess = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, sCooled, value);
        let length = res['data']['cooler'].length;
        setSFanLess(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const getCartProduct = () => {
        let products = JSON.parse(sessionStorage.getItem('cartItems')) === null ? [] : JSON.parse(sessionStorage.getItem('cartItems'));
        setCartProduct(products);
    };

    const addProduct = (id) => {
        let price = 0;
        for (let product of products) {
            if (product._id === id) {
                if (cartProduct.length === 0) {
                    product.quantity = cartNum;
                    cartProduct.push(product);
                    price = parseFloat(product['price'] * parseInt(cartNum))
                }
                else {
                    let newProduct = true;
                    for (let cartItem of cartProduct) {
                        if (cartItem['_id'] === id) {
                            price = parseFloat(product['price']) * parseInt(cartNum);
                            cartItem.quantity += cartNum;
                            newProduct = false;
                        }
                    }
                    if (newProduct) {
                        product.quantity = cartNum;
                        price = parseFloat(product['price']) * parseInt(cartNum);
                        cartProduct.push(product)
                    }
                }
                dispatch(addToCart(cartProduct));

                sessionStorage.setItem('cartItems', JSON.stringify(cartProduct));
                break;
            }
        }
    };


    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        waterCooled, setWaterCooled,
        fanLess, setFanLess,
        sManufacturer, setSManufacturer,
        sCooled, setSCooled,
        sFanLess, setSFanLess,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterWaterCooled,
        filterFanLess,
        addProduct
    }
}

export default useViewModel;