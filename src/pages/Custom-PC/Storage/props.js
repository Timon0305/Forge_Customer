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
        let res = await RestApi.fetchStorage();
        setProductLength(res['data']['storage'].length);
        setProducts(res['data']['storage']);
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchStorageFilter();
        setFilter(res['data']['storageFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterStorage(value);
        setProductLength(res['data']['storage'].length);
        setProducts(res['data']['storage'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;
