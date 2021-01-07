import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [efficiency, setEfficiency] = useState([]);
    const [modular, setModular] = useState([]);
    const [color, setColor] = useState([]);
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
        getColor()
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
        filterManufacturer,
        filterPrice,
        filterEfficiency,
        filterWattage,
        filterModular,
        filterColor,
    }
}

export default useViewModel;