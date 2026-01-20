import axios from 'axios';
//  @ts-ignore
import Cookies from 'js-cookie';
import { useLoadingIndicator } from '#app/composables/loading-indicator';

// Track active requests
let activeRequests = 0;
let loadingIndicator: ReturnType<typeof useLoadingIndicator> | null = null;

// Initialize loading indicator (will be called from client-side only)
const getLoadingIndicator = () => {
    if (process.client && !loadingIndicator) {
        loadingIndicator = useLoadingIndicator();
    }
    return loadingIndicator;
};

// const hostURL = import.meta.env.VITE_API_URL;
const hostURL = 'http://localhost:8888';
const apiURL = `${hostURL}/api/`;

const getHeaders = (type: 'json' | 'form') => ({
    Accept: 'application/json',
    withCredentials: true,
    'Content-Type': type === 'json' ? 'application/json' : 'multipart/form-data',
});

const createAxiosInstance = (type: 'json' | 'form') =>
    axios.create({
        baseURL: apiURL,
        headers: getHeaders(type),
    });

const $instance = createAxiosInstance('json');
const $instanceSilent = createAxiosInstance('json');
const $instanceForm = createAxiosInstance('form');

const setAuthAndStartProgress = (config: any) => {
    if (process.client) {
        const token = Cookies.get('wigrcMorgnas#Tkn');
        if (token) config.headers.Authorization = `Bearer ${token}`;

        // Start progress bar
        activeRequests++;
        if (activeRequests === 1) {
            const indicator = getLoadingIndicator();
            indicator?.start();
        }
    }

    return config;
};

const finishProgress = (response: any) => {
    if (process.client) {
        activeRequests--;
        if (activeRequests <= 0) {
            activeRequests = 0;
            const indicator = getLoadingIndicator();
            indicator?.finish();
        }
    }
    return response;
};

const handleError = (error: any) => {
    if (process.client) {
        activeRequests--;
        if (activeRequests <= 0) {
            activeRequests = 0;
            const indicator = getLoadingIndicator();
            indicator?.finish();
        }
    }
    return Promise.reject(error);
};

// Attach interceptors
[$instance, $instanceForm].forEach(instanceObj => {
    instanceObj.interceptors.request.use(setAuthAndStartProgress);
    instanceObj.interceptors.response.use(finishProgress, handleError);
});

export { $instance, $instanceSilent, $instanceForm };
