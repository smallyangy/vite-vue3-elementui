import http from '@/utils/axios/index';

type RES_getUserInfo = {
    name: string;
    age: number;
}
const getUserInfo = () => http.get<RES_getUserInfo>('/user/getUserInfo');

type REQ_postAny = {
    project_id: number | string;
    project_name: string
}
type RES_postAny = {
    project_id: number | string;
    project_name: string
}
const postAny = (data: REQ_postAny) => http.post<RES_postAny>('/updateList', data);

export default {
    getUserInfo,
    postAny,
};