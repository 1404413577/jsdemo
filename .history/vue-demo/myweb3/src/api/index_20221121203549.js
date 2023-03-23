//导入request.js
import request from "@/utils/request";
//可以按需导出
export const getProduct=()=>request.get("/list");

