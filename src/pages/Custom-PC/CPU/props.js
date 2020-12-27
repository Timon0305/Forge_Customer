import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPU();
        console.log(res);
        setProducts(res['data']['cpu'])
    };

    return {
        products, setProducts,
    }
}

export default useViewModel;