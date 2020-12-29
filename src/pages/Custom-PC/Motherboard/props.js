import React, {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel(props) {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [filter, setFilter] = useState(filters);
    const [check, setCheck] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchMotherboard();
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard']);
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterMotherboard(value);
        console.log('filter =>', res['data']['motherboard'].length)
        setProductLength(res['data']['motherboard'].length);
        setProducts(res['data']['motherboard'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        filter, setFilter,
        check, setCheck,
        filterProducts
    }
}

export default useViewModel;

export const filters = [
    {
        id: 1,
        name: 'ASRock',
        status: true
    },
    {
        id: 2,
        name: 'Asus',
        status: false,
    },
    {
        id: 3,
        name: 'Biostar',
        status: false
    },
    {
        id: 4,
        name: 'ECS',
        status: false
    },
    {
        id: 5,
        name: 'EVGA',
        status: false,
    },
    {
        id: 6,
        name: 'Foxconn',
        status: false
    },
    {
        id: 7,
        name: 'Gigabyte',
        status: false
    },
    {
        id: 8,
        name: 'Intel',
        status: false,
    },
    {
        id: 9,
        name: 'Jetway',
        status: false
    },
    {
        id: 10,
        name: 'MSI',
        status: false
    },
    {
        id: 11,
        name: 'NZXT',
        status: false,
    },
    {
        id: 12,
        name: 'Sapphire',
        status: false
    },
    {
        id: 13,
        name: 'Supermicro',
        status: false
    },
    {
        id: 14,
        name: 'XFX',
        status: false,
    },
    {
        id: 15,
        name: 'Zotac',
        status: false
    },
];