import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
const config: AxiosRequestConfig = {
	baseURL: `https://tech.xn--80aib1afbj.site/api`,
};
const instance: AxiosInstance = axios.create(config);
instance.interceptors.request.use((config) => config);
export default instance;
