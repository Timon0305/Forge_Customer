import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [chipSet, setChipSet] = useState([]);
    const [color, setColor] = useState([]);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [fPrice, setFPrice] = useState('0');
    const [tPrice, setTPrice] = useState('10560');
    const [sChipSet, setSChipSet] = useState('All');
    const [sColor, setSColor] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getChipSet();
        getColor();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchVideoCard();
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video']);
    };

    const getManufacturer = async () => {
        let res = await RestApi.fetchVideoCardManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getChipSet = async () => {
        let res = await RestApi.fetchVideoCardChipSet();
        setChipSet(res['data']['chipSet']);
    };

    const getColor = async () => {
        let res = await RestApi.fetchVideoCardColor();
        setColor(res['data']['color'])
    };

    const filterProducts = async (value) => {
        let res = await RestApi.filterVideoCard(value);
        setProductLength(res['data']['video'].length);
        setProducts(res['data']['video'])
    };

    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        chipSet, setChipSet,
        color, setColor,
        sManufacturer, setSManufacturer,
        fPrice, setFPrice,
        tPrice, setTPrice,
        sChipSet, setSChipSet,
        sColor, setSColor,
        filterProducts
    }
}

export default useViewModel;
