import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPUCooler();
        setProductLength(res['data']['cooling'].length);
        setProducts(res['data']['cooling'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
    }
}

export default useViewModel;