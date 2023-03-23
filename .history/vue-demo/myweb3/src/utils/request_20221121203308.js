import axios from "axios";//创建一个axios的对象
//生成一个axios的实例
const http=axios.create({
	baseURL:"http://www.xxx.top:8080/",// baseURL会在发送请求的时候拼接在url参数前面
	timeout:3000,//请求超时
});
export default http;//导出