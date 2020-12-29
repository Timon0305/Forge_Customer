import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchData();
        fetchFilter()
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPU();
        setProductLength(res['data']['cpu'].length);
        setProducts(res['data']['cpu'])
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchCPUFilter();
        setFilter(res['data']['cpuFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterCPU(value);
        let length = res['data']['cpu'].length;
        setProductLength(length);
        setProducts(res['data']['cpu'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;
