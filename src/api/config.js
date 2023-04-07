import axios from 'axios';

export const apiClient = (baseURL) => axios.create({
  baseURL,
});
