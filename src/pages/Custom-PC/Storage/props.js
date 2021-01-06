import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [types, setTypes] = useState([]);
    const [factor, setFactor] = useState([]);
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('6399');
    const [fCapacity, setFCapacity] = useState('8');
    const [tCapacity, setTCapacity] = useState('18000');
    const [fCache, setFCache] = useState('2');
    const [tCache, setTCache] = useState('4096');
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sType, setSType] = useState('All');
    const [sFactor, setSFactor] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getType();
        getFactor();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchStorage();
        setProductLength(res['data']['storage'].length);
        setProducts(res['data']['storage']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.getStorageManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getType = async () => {
        let res = await RestApi.getStorageType();
        setTypes(res['data']['type']);
    };

    const getFactor = async () => {
        let res = await RestApi.getStorageFactor();
        setFactor(res['data']['factor']);
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterStorage(value, fPrice, tPrice, fCapacity, tCapacity, sType, fCache, tCache, sFactor);
        setSManufacturer(value);
        setProductLength(res['data']['storage'].length);
        setProducts(res['data']['storage'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterCapacity = async (value) => {
        let fCapacity = value[0];
        let tCapacity = value[1];
        setFCapacity(fCapacity);
        setTCapacity(tCapacity);
    };

    const filterType = async (value) => {
        let res = await RestApi.filterStorage(sManufacturer, fPrice, tPrice, fCapacity, tCapacity, value, fCache, tCache, sFactor);
        setProductLength(res['data']['storage'].length);
        setSType(value);
        setProducts(res['data']['storage']);
    };

    const filterCache = async (value) => {
        let fCache = value[0];
        let tCache = value[1];
        setFCache(fCache);
        setTCache(tCache);
    };

    const filterFactor = async (value) => {
        let res = await RestApi.filterStorage(sManufacturer, fPrice, tPrice, fCapacity, tCapacity, sType, fCache, tCache, value);
        setProductLength(res['data']['storage'].length);
        setSFactor(value);
        setProducts(res['data']['storage']);
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        types, setTypes,
        factor, setFactor,
        fPrice, setFPrice,
        tPrice, setTPrice,
        fCapacity, setFCapacity,
        tCapacity, setTCapacity,
        fCache, setFCache,
        tCache, setTCache,
        sManufacturer, setSManufacturer,
        sType, setSType,
        sFactor, setSFactor,
        filterManufacturer,
        filterPrice,
        filterCapacity,
        filterType,
        filterCache,
        filterFactor,
    }
}

export default useViewModel;
