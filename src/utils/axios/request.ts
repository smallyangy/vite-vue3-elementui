import axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { RequestConfig, RequestInterceptors } from './types';

class Request {
    // axios实例
    instance: AxiosInstance;

    // 拦截器对象
    interceptorsObj?: RequestInterceptors;

    constructor(config: RequestConfig) {
        this.instance = axios.create(config);
        this.interceptorsObj = config.interceptors;

        // 请求拦截器
        this.instance.interceptors.request.use((res: AxiosRequestConfig) => {
            console.log('全局请求拦截器');
            return res;
        }, (err: any) => err);

        // 使用实例拦截器
        this.instance.interceptors.request.use(
            this.interceptorsObj?.requestInterceptors,
            this.interceptorsObj?.requestInterceptorsCatch,
        );
        this.instance.interceptors.response.use(
            this.interceptorsObj?.responseInterceptors,
            this.interceptorsObj?.responseInterceptorsCatch,
        );

        // 返回拦截器
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            console.log('全局响应拦截器');
            // 因为我们接口的数据都在res.data下，所以我们直接返回res.data
            return res.data;
        }, (err: any) => err);
    }

    request<T>(config: RequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            if (config.interceptors?.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config);
            }
            this.instance.request<any, T>(config).then(res => {
                // 如果我们为单个响应设置拦截器，这里使用单个响应的拦截器
                if (config.interceptors?.responseInterceptors) {
                    res = config.interceptors.responseInterceptors<T>(res);
                }
                resolve(res);
            }).catch((err: any) => reject(err));
        });
    }
}

export default Request;