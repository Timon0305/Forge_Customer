import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToCart} from "../../../store/product/actions";
function useViewModel() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [chipSet, setChipSet] = useState([]);
    const [color, setColor] = useState([]);
    const [cartProduct, setCartProduct] = useState([]);
    const [cartNum, setCartNum] = useState(1);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('10560');
    const [sChipSet, setSChipSet] = useState('All');
    const [sColor, setSColor] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getChipSet();
        getColor();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchVideoCard();
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.getVideoCardManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getChipSet = async () => {
        let res = await RestApi.getVideoCardChipSet();
        setChipSet(res['data']['chipSet']);
    };

    const getColor = async () => {
        let res = await RestApi.getVideoCardColor();
        setColor(res['data']['color'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterVideoCard(value, fPrice, tPrice, sChipSet, sColor);
        setSManufacturer(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterChipSet = async (value) => {
        let res = await RestApi.filterVideoCard(sManufacturer, fPrice, tPrice, value, sColor);
        setSChipSet(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterVideoCard(sManufacturer, fPrice, tPrice, sChipSet, value);
        setSColor(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
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
        chipSet, setChipSet,
        color, setColor,
        sManufacturer, setSManufacturer,
        fPrice, setFPrice,
        tPrice, setTPrice,
        sChipSet, setSChipSet,
        sColor, setSColor,
        cartProduct, setCartProduct,
        cartNum, setCartNum,
        filterManufacturer,
        filterPrice,
        filterChipSet,
        filterColor,
        addProduct
    }
}

export default useViewModel;
