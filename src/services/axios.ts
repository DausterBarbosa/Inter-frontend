import Axios from "axios";

import {getToken} from "../services/auth";

const Api = Axios.create({
    baseURL: `${process.env.API_URL}`
});

Api.interceptors.request.use(config => {
    const token = getToken();

    if(token){
        config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default Api;