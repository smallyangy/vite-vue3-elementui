import axios from '@/utils/axios';

const getUserInfo = axios.get('/user/getUserInfo');

export default {
    axios,
    getUserInfo,
};