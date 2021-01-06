import { create } from 'apisauce'
import {webUrl} from '../config';

const api = create({
    baseURL: webUrl,
    headers: { Accept: 'application/vnd.github.v3+json' },
});

const fetchCPU = async () => {
    return api.get('/category/cpu')
};

const getCPUManufacturer = async () => {
    return api.get('/filter/cpu')
};

const getGraphics = async () => {
    return api.get('/filter/cpuGraphics')
};

const filterCPU = async (manufacturer, fCount, tCount, fClock, tClock, graphics) => {
    return api.post('/category/cpu', {
        manufacturer: manufacturer,
        fCount: fCount,
        tCount: tCount,
        fClock: fClock,
        tClock: tClock,
        graphics: graphics
    })
};

const fetchMemory = async () => {
    return api.get('/category/memory')
};

const getMemoryManufacturer = async () => {
    return api.get('/filter/memory')
};

const getMemoryModule = async () => {
    return api.get('/filter/memoryModule')
};

const getMemoryColor = async () => {
    return api.get('/filter/memoryColor')
};

const filterMemory = async (manufacturer, fPrice, tPrice, module, color, fSpeed, tSpeed) => {
    return api.post('/category/memory', {
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
    return api.get('/category/motherboard')
};

const getMotherboardManufacturer = async () => {
    return api.get('/filter/motherboard')
};

const getMotherboardSocket = async () => {
    return api.get('/filter/motherboardSocket')
};

const getMotherboardFactor = async () => {
    return api.get('/filter/motherboardFactor')
};

const getMotherboardColor = async () => {
    return api.get('/filter/motherboardColor')
};

const filterMotherboard = async (manufacturer, fPrice, tPrice, socket, factor, fMemoryMax, tMemoryMax, color) => {
    return api.post('/category/motherboard', {
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
    return api.get('/category/video-card')
};

const fetchVideoCardFilter = async () => {
    return api.get('/filter/video-card')
};

const filterVideoCard = async (value) => {
    return api.post('/category/video-card', {filter: value})
};

const fetchPowerSupply = async () => {
    return api.get('/category/power-supply')
};

const fetchPowerSupplyFilter = async () => {
    return api.get('/filter/power-supply')
};

const filterPowerSupply = async (value) => {
    return api.post('/category/power-supply', {filter: value})
};

const fetchCPUCooler = async () => {
    return api.get('/category/cpu-cooler')
};

const getWaterCooled = async () => {
    return api.get('/filter/water-cooled')
};

const getFanLess = async () => {
    return api.get('/filter/fanless')
};

const fetchCPUCoolerFilter = async () => {
    return api.get('/filter/cpu-cooler')
};

const filterCPUCooler = async (manufacturer, cooled, fanLess) => {
    return api.post('/category/cpu-cooler', {
        manufacturer: manufacturer,
        cooled: cooled,
        fanLess: fanLess
    })
};

const fetchCase = async () => {
    return api.get('/category/case')
};

const fetchCaseFilter = async () => {
    return api.get('/filter/case')
};

const filterCase = async (value) => {
    return api.post('/category/case', {filter: value})
};

const fetchStorage = async () => {
    return api.get('/category/storage')
};

const fetchStorageFilter = async () => {
    return api.get('/filter/storage')
};

const filterStorage = async (value) => {
    return api.post('/category/storage', {filter: value})
};

const fetchSoftware = async () => {
    return api.get('/category/software')
};

const filterSoftware = async (value) => {
    return api.post('/category/software', {filter: value})
};
export default {
    fetchCPU,
    getCPUManufacturer,
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
    fetchVideoCardFilter,
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
    fetchCaseFilter,
    filterCase,
    fetchStorage,
    fetchStorageFilter,
    filterStorage,
    fetchSoftware,
    filterSoftware
}