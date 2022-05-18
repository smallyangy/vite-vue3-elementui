import Request from './request';
import config from '../../../config';

import type { RequestConfig } from './types';

const request = new Request({
    baseURL: config[(import.meta.env.MODE as 'development' | 'staging' | 'release' | 'production')].baseUrl,
    timeout: 1000 * 60 * 5,
    interceptors: {
        requestInterceptors: config => config,
        responseInterceptors: config => config,
    },
});

interface APIRequestConfig<T> extends RequestConfig {
    data?: T
}

interface APIResponse<T> {
    code: number;
    message: string;
    data: T
}

const apiRequest = <D, T = any>(config: APIRequestConfig<D>) => {
    const { method = 'GET' } = config;
    if (method.toUpperCase() === 'GET') {
        config.params = config.data;
    }
    return request.request<APIResponse<T>>(config);
};

const get = <RES>(url: string, data?: any) => apiRequest<any, RES>({
    url,
    data,
    method: 'GET',
});
const post = <RES>(url: string, data?: any) => apiRequest<any, RES>({
    url,
    data,
    method: 'POST',
});

const http = {
    get,
    post,
};

export default http;