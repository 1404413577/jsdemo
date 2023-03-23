import request from './request.js'

// 假设获取首页数据（不传递参数写法）
const GetListData = () => request.get('/list');

export default GetListData;