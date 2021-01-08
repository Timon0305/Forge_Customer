import {useState, useEffect} from 'react';

import RestApi from "../../../service/RestApi";
import {addToCart} from "../../../store/product/actions";
import {useDispatch} from "react-redux";

function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [series, setSeries] = useState([]);
    const [graphics, setGraphics] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [fCount, setFCount] = useState('1');
    const [tCount, setTCount] = useState('64');
    const [fClock, setFClock] = useState('1.10');
    const [tClock, setTClock] = useState('4.70');
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sSeries, setSSeries] = useState('All');
    const [sGraphics, setSGraphics] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getGraphics();
        getSeries();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPU();
        setProductLength(res['data']['cpu'].length);
        setProducts(res['data']['cpu'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.getCPUManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getGraphics  = async () => {
        let res = await RestApi.getGraphics();
        setGraphics(res['data']['graphics'])
    };

    const getSeries = async () => {
        let res = await RestApi.getSeries();
        setSeries(res['data']['series'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCPU(value, sSeries, fCount, tCount, fClock, tClock, sGraphics);
        let length = res['data']['cpu'].length;
        setSManufacturer(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const filterSeries = async (value) => {
        let res = await RestApi.filterCPU(sManufacturer, value, fCount, tCount, fClock, tClock, sGraphics);
        let length = res['data']['cpu'].length;
        setSSeries(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const filterCount = async (value) => {
       let fCount = value[0];
       let tCount = value[1];
       setFCount(fCount);
       setTCount(tCount);
    };

    const filterClock = async (value) => {
        let fClock = value[0];
        let tClock = value[1];
        setFClock(fClock);
        setTClock(tClock);
    };

    const filterGraphics = async (value) => {
        let res = await RestApi.filterCPU(sManufacturer, sSeries, fCount, tCount, fClock, tClock, value);
        let length = res['data']['cpu'].length;
        setSGraphics(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const getCartProduct = () => {
        let products = JSON.parse(sessionStorage.getItem('cartItems'));
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
        series, setSeries,
        graphics, setGraphics,
        fCount, setFCount,
        tCount, setTCount,
        fClock, setFClock,
        tClock, setTClock,
        sManufacturer, setSManufacturer,
        sSeries, setSSeries,
        sGraphics, setSGraphics,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterSeries,
        filterGraphics,
        filterCount,
        filterClock,
        addProduct
    }
}

export default useViewModel
