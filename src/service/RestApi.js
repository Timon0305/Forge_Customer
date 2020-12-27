import { create } from 'apisauce'
import {webUrl} from '../config';

const fetchCPU = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/cpu')
};

const fetchMemory = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/memory')
};

const fetchMotherboard = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/motherboard')
};

const fetchVideoCard = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/video-card')
};

const fetchPowerSupply = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/power-supply')
};

const fetchCPUCooler = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/cpu-cooler')
};

const fetchCase = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/case')
};

const fetchstorage = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/storage')
};

const fetchSoftware = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/software')
};

export default {
    fetchCPU,
    fetchMemory,
    fetchMotherboard,
    fetchVideoCard,
    fetchPowerSupply,
    fetchCPUCooler,
    fetchCase,
    fetchstorage,
    fetchSoftware
}