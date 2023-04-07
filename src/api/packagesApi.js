import { apiClient } from '@/api/config.js';

const baseApiUrl = 'https://data.jsdelivr.com/v1'; // stats/packages?by=hits&type=npm&period=week&name=vue

export const getPackage = (packageName, params) => apiClient(baseApiUrl)
  .get(`stats/packages/npm/${packageName}`, { params });
