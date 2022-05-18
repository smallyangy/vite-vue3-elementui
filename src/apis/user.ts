import http from '@/utils/axios/index';
import type { RESgetUserInfo, REQpostAny, RESpostAny } from './user.d';

const getUserInfo = () => http.get<RESgetUserInfo>('/user/getUserInfo');

const postAny = (data: REQpostAny) => http.post<RESpostAny>('/updateList', data);

export default {
    getUserInfo,
    postAny,
};