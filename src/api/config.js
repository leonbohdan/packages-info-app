import axios from 'axios';

export const apiClient = (baseURL) => axios.create({
  baseURL,
});

const baseApiUrl = 'https://data.jsdelivr.com/v1';
const baseSearchApiUrl = 'https://registry.npmjs.org/-/v1';

export const getPackageStats = (packageName, params) => apiClient(baseApiUrl)
  .get(`stats/packages/npm/${packageName}`, { params });

export const getPackageBadge = (packageName, params) => apiClient(baseApiUrl)
  .get(`stats/packages/npm/${packageName}/badge`, { params });

export const getPackageMetadata = (packageName) => apiClient(baseApiUrl)
  .get(`packages/npm/${packageName}`);

export const getSearchPackages = (params) => apiClient(baseSearchApiUrl)
  .get('/search', { params });
