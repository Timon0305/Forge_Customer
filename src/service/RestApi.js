import { create } from 'apisauce'
import {webUrl} from '../config';

const api = create({
    baseURL: webUrl,
    headers: { Accept: 'application/vnd.github.v3+json' },
});

const fetchCPU = async () => {
    return api.get('/category/cpu')
};

const filterCPU = async (value) => {
    return api.post('/category/cpu', {filter: value})
};

const fetchMemory = async () => {
    return api.get('/category/memory')
};

const filterMemory = async (value) => {
    return api.post('/category/memory', {filter: value})
};

const fetchMotherboard = async () => {
    return api.get('/category/motherboard')
};

const fetchVideoCard = async () => {
    return api.get('/category/video-card')
};

const fetchPowerSupply = async () => {
    return api.get('/category/power-supply')
};

const fetchCPUCooler = async () => {
    return api.get('/category/cpu-cooler')
};

const fetchCase = async () => {
    return api.get('/category/case')
};

const fetchStorage = async () => {
    return api.get('/category/storage')
};

const fetchSoftware = async () => {
    return api.get('/category/software')
};

export default {
    fetchCPU,
    filterCPU,
    fetchMemory,
    filterMemory,
    fetchMotherboard,
    fetchVideoCard,
    fetchPowerSupply,
    fetchCPUCooler,
    fetchCase,
    fetchStorage,
    fetchSoftware
}