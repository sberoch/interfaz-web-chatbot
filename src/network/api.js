import axios from 'axios';

//TODO: get from env
const BASE_URL = 'http://localhost:5005/webhooks/rest/webhook'

const api = axios.create({
  baseURL: BASE_URL
});

export default api;
