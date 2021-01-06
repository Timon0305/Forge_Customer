import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [socket, setSocket] = useState([]);
    const [factor, setFactor] = useState([]);
    const [color, setColor] = useState([]);
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
        filterManufacturer,
        filterPrice,
        filterSocket,
        filterFactor,
        filterMemoryMax,
        filterColor,
    }
}

export default useViewModel;