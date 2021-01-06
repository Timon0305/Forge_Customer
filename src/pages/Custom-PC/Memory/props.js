import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [module, setModule] = useState([]);
    const [color, setColor] = useState([]);
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
        getColor()
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
        filterManufacturer,
        filterPrice,
        filterModule,
        filterColor,
        filterSpeed
    }
}

export default useViewModel;
