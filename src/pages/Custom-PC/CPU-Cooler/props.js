import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToList} from "../../../store/list/actions";
function useViewModel(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [waterCooled, setWaterCooled] = useState([]);
    const [fanLess, setFanLess] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sCooled, setSCooled] = useState('All');
    const [sFanLess, setSFanLess] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getWaterCooled();
        getFanLess();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPUCooler();
        setProductLength(res['data']['cooler'].length);
        setProducts(res['data']['cooler'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.fetchCPUCoolerFilter();
        setManufacturer(res['data']['coolerFilter'])
    };

    const getWaterCooled = async () => {
        let res = await RestApi.getWaterCooled();
        setWaterCooled(res['data']['waterCooled'])
    };

    const getFanLess = async () => {
        let res = await RestApi.getFanLess();
        setFanLess(res['data']['fanLess'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCPUCooler(value, sCooled, sFanLess);
        let length = res['data']['cooler'].length;
        setSManufacturer(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterWaterCooled = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, value, sFanLess);
        let length = res['data']['cooler'].length;
        setSCooled(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const filterFanLess = async (value) => {
        let res = await RestApi.filterCPUCooler(sManufacturer, sCooled, value);
        let length = res['data']['cooler'].length;
        setSFanLess(value);
        setProductLength(length);
        setProducts(res['data']['cooler'])
    };

    const getCartProduct = () => {
        let product = JSON.parse(sessionStorage.getItem('listItems')) === null
            ? [] :
            JSON.parse(sessionStorage.getItem('listItems'));
        setListProduct(product);
    };

    const addProduct = (id) => {
        let newComponent = 'cpu-cooler';
        for (let item of products) {
            if (item._id === id) {
                if (listProduct.length === 0) {
                    item.component = newComponent;
                    listProduct.push(item);
                } else {
                    let foundIndex =  listProduct.findIndex(x => x.component === newComponent);
                    if (foundIndex === -1){
                        item.component = newComponent;
                        listProduct.push(item)
                    } else {
                        item.component = newComponent;
                        listProduct[foundIndex] = item;
                    }
                }

            }
        }
        sessionStorage.setItem('listItems', JSON.stringify(listProduct));
        dispatch(addToList(listProduct));
        props.history.push('/products/list')
    };


    return {
        products, setProducts,
        productLength, setProductLength,
        manufacturer, setManufacturer,
        waterCooled, setWaterCooled,
        fanLess, setFanLess,
        sManufacturer, setSManufacturer,
        sCooled, setSCooled,
        sFanLess, setSFanLess,
        listProduct, setListProduct,
        filterManufacturer,
        filterWaterCooled,
        filterFanLess,
        addProduct
    }
}

export default useViewModel;