import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
  baseURL: 'http://localhost:5050',		// 这里假设后端接口地址是http://localhost:8000
  timeout: 5000 // 请求超时时间
})

// request interceptor(请求拦截器)
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
  }
  return config
}, err => {
  return Promise.reject(error);
})

// response interceptor（响应拦截器）
instance.interceptors.response.use((result) => {
  return result;
}, err => {
  return Promise.reject('error');
})

export default{
  instance
}
