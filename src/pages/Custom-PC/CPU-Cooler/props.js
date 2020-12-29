import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchData();
        fetchFilter();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPUCooler();
        setProductLength(res['data']['cooler'].length);
        setProducts(res['data']['cooler'])
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchCPUCoolerFilter();
        setFilter(res['data']['coolerFilter'])
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
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;