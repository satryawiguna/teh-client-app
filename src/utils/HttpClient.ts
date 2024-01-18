import axios, {AxiosInstance, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig} from "axios";
import {updateTokensAction} from "./store/reducers/authSlice";
import {store} from "./store";
import {useRefreshToken} from "../hooks";

const setHeaderAuthorization = (accessToken: string | null) => {
    if (accessToken) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    } else {
        delete instance.defaults.headers.common['Authorization']
    }
}

const Api = (service?: string): AxiosInstance => {
    if (service) {
        instance.defaults.baseURL = import.meta.env.VITE_BASE_API_URL.addSuffix(service)
    } else {
        instance.defaults.baseURL = import.meta.env.VITE_BASE_API_URL
    }

    return instance
}

const instanceConfig: CreateAxiosDefaults = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const instance: AxiosInstance = axios.create(instanceConfig);

instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    return request;
}, (error) => {
    return Promise.reject(error);
});

instance.interceptors.response.use((response: AxiosResponse) => {
    response.data = response.data || {}
    response.status = response.status || 0
    response.headers = response.headers || {}

    return response
}, async (error) => {
    const originalRequest = error.config

    if (!error.response) throw new Error('Error connection')

    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true

        const {
            data: dataRefreshToken,
            error: errorRefreshToken,
            isError: isErrorRefreshToken
        } = useRefreshToken({
            accessToken: `${store.getState().auth.accessToken}`,
            refreshToken: `${store.getState().auth.refreshToken}`
        })

        if (isErrorRefreshToken)
            return Promise.reject(errorRefreshToken)

        if (dataRefreshToken) {
            store.dispatch(updateTokensAction({
                accessToken: dataRefreshToken.result.accessToken,
                refreshToken: dataRefreshToken.result.refreshToken
            }))

            setHeaderAuthorization(dataRefreshToken.result.accessToken)

            originalRequest.headers['Authorization'] = `Bearer ${dataRefreshToken.result.accessToken}`
        }
    }

    return Promise.reject(error.response.data)
});

export {
    Api,
    setHeaderAuthorization
}
