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
        let res = await RestApi.getVideoCardManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getChipSet = async () => {
        let res = await RestApi.getVideoCardChipSet();
        setChipSet(res['data']['chipSet']);
    };

    const getColor = async () => {
        let res = await RestApi.getVideoCardColor();
        setColor(res['data']['color'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterVideoCard(value, fPrice, tPrice, sChipSet, sColor);
        setSManufacturer(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
    };

    const filterPrice = async (value) => {
        let fPrice = value[0];
        let tPrice = value[1];
        setFPrice(fPrice);
        setTPrice(tPrice);
    };

    const filterChipSet = async (value) => {
        let res = await RestApi.filterVideoCard(sManufacturer, fPrice, tPrice, value, sColor);
        setSChipSet(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
    };

    const filterColor = async (value) => {
        let res = await RestApi.filterVideoCard(sManufacturer, fPrice, tPrice, sChipSet, value);
        setSColor(value);
        setProductLength(res['data']['videoCard'].length);
        setProducts(res['data']['videoCard'])
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
        filterManufacturer,
        filterPrice,
        filterChipSet,
        filterColor
    }
}

export default useViewModel;
