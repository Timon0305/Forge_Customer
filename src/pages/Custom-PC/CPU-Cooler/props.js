import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [waterCooled, setWaterCooled] = useState([]);
    const [fanLess, setFanLess] = useState([]);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sCooled, setSCooled] = useState('All');
    const [sFanLess, setSFanLess] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getWaterCooled();
        getFanLess();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPUCooler();
        setProductLength(res['data']['cooler'].length);
        setProducts(res['data']['cooler'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.fetchCPUCoolerFilter();
        setManufacturer(res['data']['coolerFilter'])
    };

    const getWaterCooled = async () => {
        let res = await RestApi.getWaterCooled();
        setWaterCooled(res['data']['waterCooled'])
    };

    const getFanLess = async () => {
        let res = await RestApi.getFanLess();
        setFanLess(res['data']['fanLess'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCPUCooler(value, sCooled, sFanLess);
        let length = res['data']['cooler'].length;
        setSManufacturer(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterWaterCooled = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, value, sFanLess);
        let length = res['data']['cooler'].length;
        setSCooled(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterFanLess = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, sCooled, value);
        let length = res['data']['cooler'].length;
        setSFanLess(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        waterCooled, setWaterCooled,
        fanLess, setFanLess,
        sManufacturer, setSManufacturer,
        sCooled, setSCooled,
        sFanLess, setSFanLess,
        filterManufacturer,
        filterWaterCooled,
        filterFanLess,
    }
}

export default useViewModel;