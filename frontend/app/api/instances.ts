import axios from 'axios';
// @ts-ignore
import Cookies from 'js-cookie';
// const { progress, isLoading, start, finish, clear } = useLoadingIndicator({
//     duration: 2000,
//     throttle: 200,
//     // This is how progress is calculated by default
//     estimatedProgress: (duration, elapsed) => (2 / Math.PI * 100) * Math.atan(elapsed / duration * 100 / 50),
// })



// const hostURL = import.meta.env.VITE_API_URL;
const hostURL = 'https://attendly-backend.onrender.com';
const apiURL = `${hostURL}/api/alt-auth/`;

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
    const token = Cookies.get('');
    if (token) config.headers.Authorization = `Bearer ${token}`;

    // start({ force: true })
    // progresses.push(useProgress().start());
    return config;
};

const finishProgress = (response: any) => {
    // progresses.pop()?.finish();
    // finish()
    return response;
};

const handleError = (error: any) => {
    // progresses.pop()?.finish();
    // finish()
    return Promise.reject(error);
};

// Attach interceptors
[$instance, $instanceForm].forEach(instanceObj => {
    instanceObj.interceptors.request.use(setAuthAndStartProgress);
    instanceObj.interceptors.response.use(finishProgress, handleError);
});

export { $instance, $instanceSilent, $instanceForm };
