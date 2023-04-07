import { apiClient } from '@/api/config.js';

const baseSearchApiUrl = 'https://registry.npmjs.org/-/v1';

export const getSearchPackages = (params) => apiClient(baseSearchApiUrl)
  .get('/search', { params });
