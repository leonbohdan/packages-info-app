import { apiClient } from '@/api/config.js';

const baseSearchApiUrl = 'https://registry.npmjs.org/-/v1'; // ?text=vue

export const getSearchPackages = (params) => apiClient(baseSearchApiUrl)
  .get('/search', { params });
