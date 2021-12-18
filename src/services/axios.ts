import Axios from "axios";

import {getToken} from "../services/auth";

const Api = Axios.create({
    baseURL: "http://localhost:3333"
});

Api.interceptors.request.use(config => {
    const token = getToken();

    if(token){
        config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default Api;