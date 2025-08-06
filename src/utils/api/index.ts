import axios from 'axios';
import { baseURL } from '../constants/global';
import { ApiError } from '../types/DTO/http-errors-interface';
import { errorHandler, networkErrorStrategy } from './http-error-strategies';
import Cookies from 'js-cookie';

const httpService = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

httpService.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error?.response) {
            const statusCode = error?.response?.status;
            if (statusCode >= 400) {
                const errorData: ApiError = error.response?.data;

                errorHandler[statusCode](errorData);
            }
        } else {
            networkErrorStrategy();
        }
    }
);
httpService.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const api = {};

export default api;

