import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToList} from "../../../store/list/actions";
function useViewModel(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [efficiency, setEfficiency] = useState([]);
    const [modular, setModular] = useState([]);
    const [color, setColor] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('1919');
    const [sEfficiency, setSEfficiency] = useState('All');
    const [fWattage, setFWattage] = useState('180');
    const [tWattage, setTWattage] = useState('2000');
    const [sModular, setSModular] = useState('All');
    const [sColor, setSColor] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getEfficiency();
        getModular();
        getColor();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchPowerSupply();
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.getPowerSupplyManufacturer();
        setManufacturer(res['data']['manufacturer']);
    };

    const getEfficiency = async () => {
        let res = await RestApi.getPowerSupplyEfficiency();
        setEfficiency(res['data']['efficiency']);
    };

    const getModular = async () => {
        let res = await RestApi.getPowerSupplyModular();
        setModular(res['data']['modular']);
    };

    const getColor = async () => {
        let res = await RestApi.getPowerSupplyColor();
        setColor(res['data']['color']);
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterPowerSupply(value, fPrice, tPrice, sEfficiency, fWattage, tWattage, sModular, sColor);
        setSManufacturer(value);
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterEfficiency = async (value) => {
        let res = await RestApi.filterPowerSupply(sManufacturer, fPrice, tPrice, value, fWattage, tWattage, sModular, sColor);
        setSEfficiency(value);
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    const filterWattage = async (value) => {
        let fWattage = value[0];
        let tWattage = value[1];
        setFWattage(fWattage);
        setTWattage(tWattage);
    };

    const filterModular = async (value) => {
        let res = await RestApi.filterPowerSupply(sManufacturer, fPrice, tPrice, sEfficiency, fWattage, tWattage, value, sColor);
        sModular(value);
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterPowerSupply(sManufacturer, fPrice, tPrice, sEfficiency, fWattage, tWattage, sModular, value);
        setSColor(value);
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    const getCartProduct = () => {
        let product = JSON.parse(sessionStorage.getItem('listItems')) === null
            ? [] :
            JSON.parse(sessionStorage.getItem('listItems'));
        setListProduct(product);
    };

    const addProduct = (id) => {
        let newComponent = 'power-supply';
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
        efficiency, setEfficiency,
        modular, setModular,
        color, setColor,
        sManufacturer, setSManufacturer,
        fPrice, setFPrice,
        tPrice, setTPrice,
        sEfficiency, setSEfficiency,
        fWattage, setFWattage,
        tWattage, setTWattage,
        sModular, setSModular,
        sColor, setSColor,
        listProduct, setListProduct,
        filterManufacturer,
        filterPrice,
        filterEfficiency,
        filterWattage,
        filterModular,
        filterColor,
        addProduct
    }
}

export default useViewModel;