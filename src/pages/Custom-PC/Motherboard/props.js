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
        let res = await RestApi.fetchMotherboard();
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard']);
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchMotherboardFilter();
        setFilter(res['data']['motherboardFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterMotherboard(value);
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;