import { create } from 'apisauce'
import {webUrl} from '../config';

const api = create({
    baseURL: webUrl,
    headers: { Accept: 'application/vnd.github.v3+json' },
});

const fetchCPU = async () => {
    return await api.get('/category/cpu')
};

const getCPUManufacturer = async () => {
    return await api.get('/filter/cpu')
};

const getSeries = async () => {
    return await api.get('/filter/cpuSeries')
};

const getGraphics = async () => {
    return await api.get('/filter/cpuGraphics')
};

const filterCPU = async (manufacturer, series, fCount, tCount, fClock, tClock, graphics) => {
    return await api.post('/category/cpu', {
        manufacturer: manufacturer,
        series: series,
        fCount: fCount,
        tCount: tCount,
        fClock: fClock,
        tClock: tClock,
        graphics: graphics
    })
};

const fetchMemory = async () => {
    return await api.get('/category/memory')
};

const getMemoryManufacturer = async () => {
    return await api.get('/filter/memory')
};

const getMemoryModule = async () => {
    return await api.get('/filter/memoryModule')
};

const getMemoryColor = async () => {
    return await api.get('/filter/memoryColor')
};

const filterMemory = async (manufacturer, fPrice, tPrice, module, color, fSpeed, tSpeed) => {
    return await api.post('/category/memory', {
        manufacturer: manufacturer,
        fPrice: fPrice,
        tPrice: tPrice,
        module: module,
        color: color,
        fSpeed: fSpeed,
        tSpeed: tSpeed
    })
};

const fetchMotherboard = async () => {
    return await api.get('/category/motherboard')
};

const getMotherboardManufacturer = async () => {
    return await api.get('/filter/motherboard')
};

const getMotherboardSocket = async () => {
    return await api.get('/filter/motherboardSocket')
};

const getMotherboardFactor = async () => {
    return await api.get('/filter/motherboardFactor')
};

const getMotherboardColor = async () => {
    return await api.get('/filter/motherboardColor')
};

const filterMotherboard = async (manufacturer, fPrice, tPrice, socket, factor, fMemoryMax, tMemoryMax, color) => {
    return await api.post('/category/motherboard', {
        manufacturer: manufacturer,
        fPrice: fPrice,
        tPrice: tPrice,
        socket: socket,
        factor: factor,
        fMemoryMax: fMemoryMax,
        tMemoryMax: tMemoryMax,
        color: color,
    })
};

const fetchVideoCard = async () => {
    return await api.get('/category/video-card')
};

const getVideoCardManufacturer = async () => {
    return await api.get('/filter/videoCardManufacturer')
};

const getVideoCardChipSet = async () => {
    return await api.get('filter/videoCardChipSet')
};

const getVideoCardColor = async () => {
    return await api.get('filter/videoCardColor')
};

const filterVideoCard = async (manufacturer, fPrice, tPrice, chipSet, color) => {
    return await api.post('/category/video-card', {
        manufacturer: manufacturer,
        fPrice: fPrice,
        tPrice: tPrice,
        chipSet: chipSet,
        color: color
    })
};

const fetchPowerSupply = async () => {
    return await api.get('/category/power-supply')
};

const fetchPowerSupplyFilter = async () => {
    return await api.get('/filter/power-supply')
};

const filterPowerSupply = async (value) => {
    return await api.post('/category/power-supply', {filter: value})
};

const fetchCPUCooler = async () => {
    return await api.get('/category/cpu-cooler')
};

const getWaterCooled = async () => {
    return await api.get('/filter/water-cooled')
};

const getFanLess = async () => {
    return await api.get('/filter/fanless')
};

const fetchCPUCoolerFilter = async () => {
    return await api.get('/filter/cpu-cooler')
};

const filterCPUCooler = async (manufacturer, cooled, fanLess) => {
    return api.post('/category/cpu-cooler', {
        manufacturer: manufacturer,
        cooled: cooled,
        fanLess: fanLess
    })
};

const fetchCase = async () => {
    return await api.get('/category/case')
};

const getCaseManufacturer = async () => {
    return await api.get('/filter/caseManufacturer')
};

const getCaseType = async () => {
    return await api.get('/filter/caseType')
};

const getCaseColor = async () => {
    return await api.get('/filter/caseColor')
};

const getCasePowerSupply = async () => {
    return await api.get('/filter/casePowerSupply')
};

const getCaseWindow = async () => {
    return await api.get('/filter/caseWindow')
};

const filterCase = async (manufacturer, fPrice, tPrice, type, color, powerSupply, window) => {
    return await api.post('/category/case', {
        manufacturer: manufacturer,
        fPrice: fPrice,
        tPrice: tPrice,
        type: type,
        color: color,
        powerSupply: powerSupply,
        window: window
    })
};

const fetchStorage = async () => {
    return await api.get('/category/storage')
};

const getStorageManufacturer = async () => {
    return await api.get('/filter/storage')
};

const getStorageType = async () => {
    return await api.get('/filter/storageType')
};

const getStorageFactor = async () => {
    return await api.get('/filter/storageFactor')
};

const filterStorage = async (manufacturer, fPrice, tPrice, fCapacity, tCapacity, type, fCache, tCache, factor) => {
    return await api.post('/category/storage', {
        manufacturer: manufacturer,
        fPrice: fPrice,
        tPrice: tPrice,
        fCapacity: fCapacity,
        tCapacity: tCapacity,
        type: type,
        fCache: fCache,
        tCache: tCache,
        factor: factor
    })
};

const fetchSoftware = async () => {
    return await api.get('/category/software')
};

const filterSoftware = async (value) => {
    return await api.post('/category/software', {filter: value})
};
export default {
    fetchCPU,
    getCPUManufacturer,
    getSeries,
    getGraphics,
    filterCPU,
    fetchMemory,
    getMemoryManufacturer,
    getMemoryModule,
    getMemoryColor,
    filterMemory,
    fetchMotherboard,
    getMotherboardManufacturer,
    getMotherboardSocket,
    getMotherboardFactor,
    getMotherboardColor,
    filterMotherboard,
    fetchVideoCard,
    getVideoCardManufacturer,
    getVideoCardChipSet,
    getVideoCardColor,
    filterVideoCard,
    fetchPowerSupply,
    fetchPowerSupplyFilter,
    filterPowerSupply,
    fetchCPUCooler,
    getWaterCooled,
    fetchCPUCoolerFilter,
    getFanLess,
    filterCPUCooler,
    fetchCase,
    getCaseManufacturer,
    getCaseType,
    getCaseColor,
    getCasePowerSupply,
    getCaseWindow,
    filterCase,
    fetchStorage,
    getStorageManufacturer,
    getStorageType,
    getStorageFactor,
    filterStorage,
    fetchSoftware,
    filterSoftware
}