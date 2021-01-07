import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [type, setType] = useState([]);
    const [color, setColor] = useState([]);
    const [powerSupply, setPowerSupply] = useState([]);
    const [window, setWindow] = useState([]);
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
        getWindow()
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
        filterManufacturer,
        filterPrice,
        filterType,
        filterColor,
        filterPowerSupply,
        filterWindow,
    }
}

export default useViewModel;

