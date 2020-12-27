import { create } from 'apisauce'
import {webUrl} from '../config';

const fetchCPU = async () => {
    const api = create({
        baseURL: webUrl,
        headers: { Accept: 'application/vnd.github.v3+json' },
    });
    return api.get('/category/cpu')
};

export default {
    fetchCPU
}