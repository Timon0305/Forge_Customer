import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState([
        {
            id: 1,
            name: 'All',
            status: true
        },
        {
            id: 2,
            name: 'AMD',
            status: false,
        },
        {
            id: 3,
            name: 'Intel',
            status: false
        }
    ]);
    const [check, setCheck] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPU();
        setProductLength(res['data']['cpu'].length);
        setProducts(res['data']['cpu'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterCPU(value);
        console.log('filter =>', res['data']['cpu'].length);
        let length = res['data']['cpu'].length;
        setProductLength(length);
        setProducts(res['data']['cpu'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        check, setCheck,
        filter, setFilter,
        filterProducts
    }
}

export default useViewModel;