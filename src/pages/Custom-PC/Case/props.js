import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchData();
        fetchFilterData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCase();
        setProductLength(res['data']['cases'].length);
        setProducts(res['data']['cases'])
    };

    const fetchFilterData = async () => {
        let res = await RestApi.fetchCaseFilter();
        setFilter(res['data']['caseFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterCase(value);
        let length = res['data']['cases'].length;
        setProductLength(length);
        setProducts(res['data']['cases'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;

