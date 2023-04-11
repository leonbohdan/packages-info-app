import axios from 'axios';

const api = axios.create({ baseURL: 'https://data.jsdelivr.com/v1' });
const searchApi = axios.create({ baseURL: 'https://registry.npmjs.org/-/v1' });

export const getPackageStats = (packageName, params) => api.get(`/stats/packages/npm/${packageName}`, { params });
export const getPackageBadge = (packageName, params) => api.get(`/stats/packages/npm/${packageName}/badge`, { params });
export const getPackageMetadata = (packageName) => api.get(`/packages/npm/${packageName}`);
export const getSearchPackages = (params) => searchApi.get('/search', { params });
