import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [waterCooled, setWaterCooled] = useState([]);
    const [fanless, setFanless] = useState([]);

    useEffect(() => {
        fetchData();
        getManufacturer();
        getWaterCooled();
        getFanless();
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

    const getFanless = async () => {
        let res = await RestApi.getFanless();
        setFanless(res['data']['fanless'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterCPUCooler(value);
        let length = res['data']['cooler'].length;
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        waterCooled, setWaterCooled,
        fanless, setFanless,
        filterProducts
    }
}

export default useViewModel;