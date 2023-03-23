import axios from "axios";//创建一个axios的对象
//生成一个axios的实例
const http=axios.create({
	baseURL:"http://localhost:5050",// baseURL会在发送请求的时候拼接在url参数前面
	timeout:3000,//请求超时
});


// request interceptor(请求拦截器)
instance.interceptors.http.use(config => {
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
  


export default http;//导出