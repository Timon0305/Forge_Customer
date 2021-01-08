import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/product/actions";
function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [socket, setSocket] = useState([]);
    const [factor, setFactor] = useState([]);
    const [color, setColor] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('2387');
    const [sSocket, setSSocket] = useState('All');
    const [sFactor, setSFactor] = useState('All');
    const [fMemoryMax, setFMemoryMax] = useState('2');
    const [tMemoryMax, setTMemoryMax] = useState('2000');
    const [sColor, setSColor] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getSocket();
        getFactor();
        getColor();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchMotherboard();
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.getMotherboardManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getSocket = async () => {
        let res = await RestApi.getMotherboardSocket();
        setSocket(res['data']['socket']);
    };

    const getFactor = async () => {
        let res = await RestApi.getMotherboardFactor();
        setFactor(res['data']['factor']);
    };

    const getColor = async () => {
        let res = await RestApi.getMotherboardColor();
        setColor(res['data']['color'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterMotherboard(value, fPrice, tPrice, sSocket, sFactor, fMemoryMax, tMemoryMax, sColor);
        setProductLength(res['data']['motherboard'].length);
        setSManufacturer(value);
        setProducts(res['data']['motherboard'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterSocket = async (value) => {
        let res = await RestApi.filterMotherboard(sManufacturer, fPrice, tPrice, value, sFactor, fMemoryMax, tMemoryMax, sColor);
        setProductLength(res['data']['motherboard'].length);
        setSSocket(value);
        setProducts(res['data']['motherboard']);
    };

    const filterFactor = async (value) => {
        let res = await RestApi.filterMotherboard(sManufacturer, fPrice, tPrice, sSocket, value, fMemoryMax, tMemoryMax, sColor);
        setProductLength(res['data']['motherboard'].length);
        setSFactor(value);
        setProducts(res['data']['motherboard'])
    };

    const filterMemoryMax = async (value) => {
        let fMemoryMax = value[0];
        let tMemoryMax = value[1];
        setFMemoryMax(fMemoryMax);
        setTMemoryMax(tMemoryMax);
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterMotherboard(sManufacturer, fPrice, tPrice, sSocket, sFactor, fMemoryMax, tMemoryMax, value );
        setProductLength(res['data']['motherboard'].length);
        setSColor(value);
        setProducts(res['data']['motherboard']);
    };

    const getCartProduct = () => {
        let products = JSON.parse(sessionStorage.getItem('cartItems')) === null ? [] : JSON.parse(sessionStorage.getItem('cartItems'));
        setCartProduct(products);
    };

    const addProduct = (id) => {
        let price = '';
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
        socket, setSocket,
        factor, setFactor,
        color, setColor,
        sManufacturer, setSManufacturer,
        sSocket, setSSocket,
        fPrice, setFPrice,
        tPrice, setTPrice,
        sFactor, setSFactor,
        fMemoryMax, setFMemoryMax,
        tMemoryMax, setTMemoryMax,
        sColor, setSColor,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterPrice,
        filterSocket,
        filterFactor,
        filterMemoryMax,
        filterColor,
        addProduct
    }
}

export default useViewModel;