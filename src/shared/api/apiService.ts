import axios, {AxiosRequestConfig, Method} from 'axios';

/**
 * Functions for handling HTTP requests.
 */

function request(url: string, method: Method, body?: any, config?: AxiosRequestConfig) {
    const httpHeaders = {};

    const modifiedConfig = {
        ...config,
        headers: {...config != null ? config.headers : null, ...httpHeaders},
    };

    return axios.request({url, method, data: body, ...modifiedConfig});
}

function get(url: string, config?: AxiosRequestConfig) {
    return request(url, 'GET', null, config);
}

function post(url: string, body?: any, config?: AxiosRequestConfig) {
    return request(url, 'POST', body, config);
}

const apiService = {get, post};

export default apiService;
