import axios from 'axios';

export const BUILD_TYPE_LIVE = 1;
export const BUILD_TYPE_LIVE_DEMO = 2;
export const BUILD_TYPE_STAGING = 3;
export const BUILD_TYPE_LOCAL = 4;



const LIVE_IP = ""
const LIVE_DEMO_IP = ""
const STAGING_IP = ""
const LOCAL_IP = ""



export const BUILD_TYPE = BUILD_TYPE_LIVE;

const SERVERS = {
    [BUILD_TYPE_LIVE]: LIVE_IP,
    [BUILD_TYPE_LIVE_DEMO]: LIVE_DEMO_IP,
    [BUILD_TYPE_STAGING]: STAGING_IP,
    [BUILD_TYPE_LOCAL]: LOCAL_IP,
};

export const SERVER = SERVERS[BUILD_TYPE];


const axiosApi = axios.create({
    baseURL: SERVER,
});


axios.interceptors.request.use(function (config) {
    return config;
});

const getHeaders = async () => {
    try {
        const value = await localStorage.getItem("TOKEN");
        if (value) {
            return { Authorization: 'Token ' + value };
        } else {
            return {};
        }
    } catch {
        return {};
    }
};

axiosApi.interceptors.response.use(
    response => response,
    error => Promise.reject(error),
);

export async function get(url, config) {
    return await axiosApi
        .get(url, {
            ...config,
            headers: await getHeaders(),
        })
        .then(response => response.data);
}

export async function post(url, data, config, submissionUrl) {
    submissionUrl = submissionUrl || SERVER
    const baseUrl = axios.create({
        baseURL: submissionUrl,
        timeout: 240000, // 4 minutes
    });


    let headers = { ...(await getHeaders()) };

    return await baseUrl
        .post(url, data, {
            ...config,
            headers: headers,
        })
        .then(response => {
            return response.data;
        })
        .catch(error => {

        });
}

export async function postHeader(url, data, config) {
    let headers = { ...(await getHeaders()) };
    return await axiosApi
        .post(url, data, {
            ...config,
            headers: headers,
        })
        .then(response => {
            return response;
        });
}
