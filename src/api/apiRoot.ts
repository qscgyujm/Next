import axios from 'axios';

const url = '/api';

export const apiRoot = axios.create({
  baseURL: url,
});
