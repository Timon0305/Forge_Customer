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
        let res = await RestApi.fetchMemory();
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory']);
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterMemory(value);
        console.log('filter =>', res['data']['memory'].length)
        setProductLength(res['data']['memory'].length);
        setProducts(res['data']['memory'])
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
        name: 'All',
        status: true
    },
    {
        id: 2,
        name: 'ADATA',
        status: false,
    },
    {
        id: 3,
        name: 'AMD',
        status: false
    },
    {
        id: 4,
        name: 'Antec',
        status: false
    },
    {
        id: 5,
        name: 'Apacer',
        status: false,
    },
    {
        id: 6,
        name: 'Apotop',
        status: false
    },
    {
        id: 7,
        name: 'Avexir',
        status: false
    },
    {
        id: 8,
        name: 'Compustocx',
        status: false,
    },
    {
        id: 9,
        name: 'Corsair',
        status: false
    },
    {
        id: 10,
        name: 'Crucial',
        status: false
    },
    {
        id: 11,
        name: 'Dell',
        status: false,
    },
    {
        id: 12,
        name: 'EVGA',
        status: false
    },
    {
        id: 13,
        name: 'G.Skill',
        status: false
    },
    {
        id: 14,
        name: 'GALAX',
        status: false,
    },
    {
        id: 15,
        name: 'GelL',
        status: false
    },
    {
        id: 16,
        name: 'Gigabyte',
        status: false
    },
    {
        id: 17,
        name: 'Gloway',
        status: false,
    },
    {
        id: 18,
        name: 'HP',
        status: false
    },
    {
        id: 19,
        name: 'KFA2',
        status: false
    },
    {
        id: 20,
        name: 'Kingston',
        status: false,
    },
    {
        id: 21,
        name: 'Klevv',
        status: false
    },
    {
        id: 22,
        name: 'Micron',
        status: false
    },
    {
        id: 23,
        name: 'Mushkin',
        status: false,
    },
    {
        id: 24,
        name: 'Neo Forza',
        status: false
    },
    {
        id: 25,
        name: 'OCZ',
        status: false
    },
    {
        id: 26,
        name: 'OLOy',
        status: false,
    },
    {
        id: 27,
        name: 'Panram',
        status: false
    },
    {
        id: 28,
        name: 'Pareema',
        status: false
    },
    {
        id: 29,
        name: 'Patroit',
        status: false,
    },
    {
        id: 30,
        name: 'PNY',
        status: false
    },
    {
        id: 31,
        name: 'Samsung',
        status: false
    },
    {
        id: 32,
        name: 'Silicon Power',
        status: false,
    },
    {
        id: 33,
        name: 'SK hynix',
        status: false
    },
    {
        id: 34,
        name: 'Super Talent',
        status: false
    },
    {
        id: 35,
        name: 'Team',
        status: false,
    },
    {
        id: 36,
        name: 'Thermaltake',
        status: false
    },
    {
        id: 37,
        name: 'Timetec',
        status: false
    },
    {
        id: 38,
        name: 'Toshiba',
        status: false,
    },
    {
        id: 39,
        name: 'Transcend',
        status: false
    },
    {
        id: 40,
        name: 'V-Color',
        status: false
    },
    {
        id: 41,
        name: 'V7',
        status: false,
    },
    {
        id: 42,
        name: 'Vision Tek',
        status: false
    },
    {
        id: 43,
        name: 'Wintec',
        status: false
    }
];