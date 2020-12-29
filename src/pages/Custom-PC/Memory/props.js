import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchData();
        fetchFilter();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchMemory();
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory']);
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchMemoryFilter();
        setFilter(res['data']['memoryFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterMemory(value);
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;
