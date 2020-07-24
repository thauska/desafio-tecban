import axios from 'axios';

const http = axios.create({
  baseURL: 'https://',
  timeout: 1000,
});

http.defaults.headers.post['Content-Type'] = 'application/json';
http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default http;
