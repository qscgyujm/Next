import { apiRoot } from './apiRoot';

export const getDemoRoot = () => apiRoot.get('/');

export const getDemoTest = () => apiRoot.get('/test');
