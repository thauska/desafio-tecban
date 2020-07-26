import axios from 'axios';

const http = axios.create({
  baseURL: 'http://8fa45da06085.ngrok.io', 
  // baseURL: 'http://192.168.0.10:3000',
  timeout: 1000,
});

http.defaults.headers.post['Content-Type'] = 'application/json';

export default http;
