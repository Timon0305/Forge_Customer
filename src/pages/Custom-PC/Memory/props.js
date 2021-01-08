import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {addToCart} from "../../../store/product/actions";
import {useDispatch} from "react-redux";
function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [module, setModule] = useState([]);
    const [color, setColor] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('2812');
    const [fSpeed, setFSpeed] = useState('333');
    const [tSpeed, setTSpeed] = useState('5100');
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sColor, setSColor] = useState('All');
    const [sModule, setSModule] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getModules();
        getColor();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchMemory();
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.getMemoryManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getModules = async () => {
        let res = await RestApi.getMemoryModule();
        setModule(res['data']['module'])
    };

    const getColor = async () => {
        let res = await RestApi.getMemoryColor();
        setColor(res['data']['color']);
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterMemory(value, fPrice, tPrice, sModule, sColor, fSpeed, tSpeed);
        setSManufacturer(value);
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterModule = async (value) => {
        let res = await RestApi.filterMemory(sManufacturer, fPrice, tPrice, value, sColor, fSpeed, tSpeed);
        setProductLength(res['data']['memory'].length);
        setSModule(value);
        setProducts(res['data']['memory']);
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterMemory(sManufacturer, fPrice, tPrice, sModule, value, fSpeed, tSpeed);
        setProductLength(res['data']['memory'].length);
        setSColor(value);
        setProducts(res['data']['memory']);
    };

    const filterSpeed = async (value) => {
        let fSpeed = value[0];
        let tSpeed = value[1];
        setFSpeed(fSpeed);
        setTSpeed(tSpeed);
    };

    const getCartProduct = () => {
        let products = JSON.parse(sessionStorage.getItem('cartItems'));
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
        fPrice, setFPrice,
        tPrice, setTPrice,
        module, setModule,
        color, setColor,
        fSpeed, setFSpeed,
        tSpeed, setTSpeed,
        sManufacturer, setSManufacturer,
        sModule, setSModule,
        sColor, setSColor,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterPrice,
        filterModule,
        filterColor,
        filterSpeed,
        addProduct
    }
}

export default useViewModel;
