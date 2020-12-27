import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchPowerSupply();
        setProductLength(res['data']['power'].length);
        setProducts(res['data']['power'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
    }
}

export default useViewModel;