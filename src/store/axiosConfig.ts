import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
const config: AxiosRequestConfig = {
	baseURL: `${process.env.REACT_APP_BASE_URL}`,
};
const instance: AxiosInstance = axios.create(config);
instance.interceptors.request.use((config) => config);
export default instance;
