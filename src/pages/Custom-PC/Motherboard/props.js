import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchMotherboard();
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
    }
}

export default useViewModel;