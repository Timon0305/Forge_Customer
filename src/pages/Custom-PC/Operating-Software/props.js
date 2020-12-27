import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchSoftware();
        setProductLength(res['data']['software'].length);
        setProducts(res['data']['software'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
    }
}

export default useViewModel;