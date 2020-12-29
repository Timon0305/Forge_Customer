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
        let res = await RestApi.fetchVideoCard();
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video']);
    };

    const fetchFilter = async () => {
        let res = await RestApi.fetchVideoCardFilter();
        setFilter(res['data']['videoFilter'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterVideoCard(value);
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;
