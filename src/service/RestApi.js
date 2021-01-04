import { create } from 'apisauce'
import {webUrl} from '../config';

const api = create({
    baseURL: webUrl,
    headers: { Accept: 'application/vnd.github.v3+json' },
});

const fetchCPU = async () => {
    return api.get('/category/cpu')
};

const fetchCPUManufacturer = async () => {
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

const fetchMemoryFilter = async () => {
    return api.get('/filter/memory')
};

const filterMemory = async (value) => {
    return api.post('/category/memory', {filter: value})
};

const fetchMotherboard = async () => {
    return api.get('/category/motherboard')
};

const fetchMotherboardFilter = async () => {
    return api.get('/filter/motherboard')
};

const filterMotherboard = async (value) => {
    return api.post('/category/motherboard', {filter: value})
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
    fetchCPUManufacturer,
    filterCPU,
    getGraphics,
    fetchMemory,
    fetchMemoryFilter,
    filterMemory,
    fetchMotherboard,
    fetchMotherboardFilter,
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