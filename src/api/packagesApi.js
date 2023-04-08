import { apiClient } from '@/api/config.js';

const baseApiUrl = 'https://data.jsdelivr.com/v1';

export const getPackageStats = (packageName, params) => apiClient(baseApiUrl)
  .get(`stats/packages/npm/${packageName}`, { params });

export const getPackageBadge = (packageName, params) => apiClient(baseApiUrl)
  .get(`stats/packages/npm/${packageName}/badge`, { params });

export const getPackageMetadata = (packageName) => apiClient(baseApiUrl)
  .get(`packages/npm/${packageName}`);
