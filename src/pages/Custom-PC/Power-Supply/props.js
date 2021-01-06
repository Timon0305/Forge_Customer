import {useState, useEffect} from 'react';
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
        let res = await RestApi.fetchPowerSupply();
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power']);
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchPowerSupplyFilter();
        setFilter(res['data']['powerFilter']);
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterPowerSupply(value);
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;