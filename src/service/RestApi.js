import { create } from 'apisauce'
import {webUrl} from '../config';

const api = create({
    baseURL: webUrl,
    headers: { Accept: 'application/vnd.github.v3+json' },
});

const fetchCPU = async () => {
    return api.get('/category/cpu')
};

const fetchCPUFilter = async () => {
    return api.get('/filter/cpu')
};

const filterCPU = async (value) => {
    return api.post('/category/cpu', {filter: value})
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

const fetchCPUCoolerFilter = async () => {
    return api.get('/filter/cpu-cooler')
};

const filterCPUCooler = async (value) => {
    return api.post('/category/cpu-cooler', {filter: value})
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
    fetchCPUFilter,
    filterCPU,
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
    fetchCPUCoolerFilter,
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