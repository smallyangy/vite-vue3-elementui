import axios from 'axios';
import config from '../../config';

axios.defaults.baseURL = config[(import.meta.env.MODE as 'development' | 'staging' | 'release' | 'production')].baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(res => {
    if (typeof res.data !== 'object') {
        console.error('服务器异常');
        return Promise.reject(res);
    }
    if (res.data.code !== 0) {
        if (res.data.message) console.error(res.data.message);
        return Promise.reject(res.data);
    }
    return res.data.data;
});

export default axios;