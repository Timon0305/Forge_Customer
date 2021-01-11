import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
import {useDispatch} from "react-redux";
import {addToList} from "../../../store/list/actions";

function useViewModel(props) {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [series, setSeries] = useState([]);
    const [graphics, setGraphics] = useState([]);
    const [listProduct, setListProduct] = useState([]);
    const [fCount, setFCount] = useState('1');
    const [tCount, setTCount] = useState('64');
    const [fClock, setFClock] = useState('1.10');
    const [tClock, setTClock] = useState('4.70');
    const [sManufacturer, setSManufacturer] = useState('All');
    const [sSeries, setSSeries] = useState('All');
    const [sGraphics, setSGraphics] = useState('All');

    useEffect(() => {
        fetchData();
        getManufacturer();
        getGraphics();
        getSeries();
        getCartProduct();
    }, []);

    const fetchData = async () => {
        let res = await RestApi.fetchCPU();
        setProductLength(res['data']['cpu'].length);
        setProducts(res['data']['cpu'])
    };

    const getManufacturer = async () => {
        let res = await RestApi.getCPUManufacturer();
        setManufacturer(res['data']['manufacturer'])
    };

    const getGraphics  = async () => {
        let res = await RestApi.getGraphics();
        setGraphics(res['data']['graphics'])
    };

    const getSeries = async () => {
        let res = await RestApi.getSeries();
        setSeries(res['data']['series'])
    };

    const filterManufacturer = async (value) => {
        let res = await RestApi.filterCPU(value, sSeries, fCount, tCount, fClock, tClock, sGraphics);
        let length = res['data']['cpu'].length;
        setSManufacturer(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const filterSeries = async (value) => {
        let res = await RestApi.filterCPU(sManufacturer, value, fCount, tCount, fClock, tClock, sGraphics);
        let length = res['data']['cpu'].length;
        setSSeries(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const filterCount = async (value) => {
       let fCount = value[0];
       let tCount = value[1];
       setFCount(fCount);
       setTCount(tCount);
    };

    const filterClock = async (value) => {
        let fClock = value[0];
        let tClock = value[1];
        setFClock(fClock);
        setTClock(tClock);
    };

    const filterGraphics = async (value) => {
        let res = await RestApi.filterCPU(sManufacturer, sSeries, fCount, tCount, fClock, tClock, value);
        let length = res['data']['cpu'].length;
        setSGraphics(value);
        setProductLength(length);
        setProducts(res['data']['cpu']);
    };

    const getCartProduct = () => {
        let product = JSON.parse(sessionStorage.getItem('listItems')) === null
            ? [] :
            JSON.parse(sessionStorage.getItem('listItems'));
        setListProduct(product);
    };

    const addProduct = (id) => {
        let newComponent = 'cpu';
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
        series, setSeries,
        graphics, setGraphics,
        fCount, setFCount,
        tCount, setTCount,
        fClock, setFClock,
        tClock, setTClock,
        sManufacturer, setSManufacturer,
        sSeries, setSSeries,
        sGraphics, setSGraphics,
        listProduct, setListProduct,
        filterManufacturer,
        filterSeries,
        filterGraphics,
        filterCount,
        filterClock,
        addProduct
    }
}

export default useViewModel
