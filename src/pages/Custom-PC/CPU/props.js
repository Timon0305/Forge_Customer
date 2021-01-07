import {useState, useEffect} from 'react';
import RestApi from "../../../service/RestApi";
function useViewModel() {
    const [products, setProducts] = useState([]);
    const [productLength, setProductLength] = useState();
    const [manufacturer, setManufacturer] = useState([]);
    const [series, setSeries] = useState([]);
    const [graphics, setGraphics] = useState([]);
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
        getSeries();
        getGraphics()
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

    const getSeries = async () => {
        let res = await RestApi.getSeries();
        setSeries(res['data']['series'])
    };

    const getGraphics  = async () => {
        let res = await RestApi.getGraphics();
        setGraphics(res['data']['graphics'])
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
        filterManufacturer,
        filterSeries,
        filterGraphics,
        filterCount,
        filterClock,
    }
}

export default useViewModel;
