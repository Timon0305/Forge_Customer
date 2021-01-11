import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function useViewModel() {
    const data = useSelector(state => state.List);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const getListData = () => {
            if (data && data.products.length) {
                setProductList(data.products)
            } else {
                let listItem = JSON.parse(sessionStorage.getItem('listItems'))
                    ? JSON.parse(sessionStorage.getItem('listItems'))
                    : [];
                setProductList(listItem)
            }
        };
        getListData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return {
        productList, setProductList
    }
}

export default useViewModel;