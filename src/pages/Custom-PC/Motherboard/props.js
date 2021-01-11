import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToList} from "../../../store/list/actions";
function useViewModel(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [socket, setSocket] = useState([]);
    const [factor, setFactor] = useState([]);
    const [color, setColor] = useState([]);
    const [listProduct, setListProduct] = useState([]);
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
        let product = JSON.parse(sessionStorage.getItem('listItems')) === null
            ? [] :
            JSON.parse(sessionStorage.getItem('listItems'));
        setListProduct(product);
    };

    const addProduct = (id) => {
        let newComponent = 'motherboard';
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
        listProduct, setListProduct,
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