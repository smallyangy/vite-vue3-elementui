import http from '@/utils/axios';

type RES_getUserInfo = {
    name: string;
    age: number;
}
const getUserInfo = () => http.get<any, RES_getUserInfo>('/user/getUserInfo');

type REQ_postAny = {
    project_id: number | string;
    project_name: string
}
type RES_postAny = {
    project_id: number | string;
    project_name: string
}
const postAny = (data: REQ_postAny) => http.post<any, RES_postAny>('/updateList', data);

export default {
    http,
    getUserInfo,
    postAny,
};