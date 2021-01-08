import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {addToCart} from "../../../store/product/actions";
import {useDispatch} from "react-redux";
function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [type, setType] = useState([]);
    const [color, setColor] = useState([]);
    const [powerSupply, setPowerSupply] = useState([]);
    const [window, setWindow] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('2637');
    const [sType, setSType] = useState('All');
    const [sColor, setSColor] = useState('All');
    const [sPowerSupply, setSPowerSupply] = useState('All');
    const [sWindow, setSWindow] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getType();
        getColor();
        getPowerSupply();
        getWindow();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCase();
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.getCaseManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getType = async () => {
        let res = await RestApi.getCaseType();
        setType(res['data']['type']);
    };

    const getColor = async () => {
        let res = await RestApi.getCaseColor();
        setColor(res['data']['color']);
    };

    const getPowerSupply = async () => {
        let res = await RestApi.getCasePowerSupply();
        setPowerSupply(res['data']['powerSupply'])
    };

    const getWindow = async () => {
        let res = await RestApi.getCaseWindow();
        setWindow(res['data']['window']);
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCase(value, fPrice, tPrice, sType, sColor, sPowerSupply, sWindow);
        setSManufacturer(value);
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterType = async (value) => {
        let res = await RestApi.filterCase(sManufacturer, fPrice, tPrice, value, sColor, sPowerSupply, sWindow);
        setSType(value);
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterCase(sManufacturer, fPrice, tPrice, sType, value, sPowerSupply, sWindow);
        setSColor(value);
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const filterPowerSupply = async (value) => {
        let res = await RestApi.filterCase(sManufacturer, fPrice, tPrice, sType, sColor, value, sWindow);
        setSPowerSupply(value);
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const filterWindow = async (value) => {
        let res = await RestApi.filterCase(sManufacturer, fPrice, tPrice, sType, sColor, sPowerSupply, value);
        setSWindow(value);
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
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
        type, setType,
        color,setColor,
        powerSupply, setPowerSupply,
        window, setWindow,
        sManufacturer, setSManufacturer,
        fPrice, setFPrice,
        tPrice, setTPrice,
        sType, setSType,
        sColor, setSColor,
        sPowerSupply, setSPowerSupply,
        sWindow, setSWindow,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterPrice,
        filterType,
        filterColor,
        filterPowerSupply,
        filterWindow,
        addProduct
    }
}

export default useViewModel;

