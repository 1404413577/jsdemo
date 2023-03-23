import request from './request.js'

// 假设获取首页数据（不传递参数写法）
const GetListData = () => request.post('/list');


// // 假设获取首页数据（传递参数写法）
// const GetHomeData = (params) => request.get('/homedata', {params});

// // 假设调用登录接口（post请求一般都传递参数）
// const GoLogin = (params) => request.post('/login', params);

export default GetListData;