import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchSoftware();
        setProductLength(res['data']['software'].length);
        setProducts(res['data']['software']);
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterSoftware(value);
        setProductLength(res['data']['software'].length);
        setProducts(res['data']['software'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;