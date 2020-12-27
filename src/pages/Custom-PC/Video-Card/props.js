import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchVideoCard();
        console.log(res)
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
    }
}

export default useViewModel;