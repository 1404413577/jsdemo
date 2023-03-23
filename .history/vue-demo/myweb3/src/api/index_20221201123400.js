//导入request.js
import request from "@/utils/request";
//可以按需导出
export const getProduct = () => request.get("/list");

export const getHome = () => request.get("/home");

export const getBook = () => request.get("/book");

export const addBook = (data) => request.post("/book/add", data);

export const delBook = (parmas) => request.post("/book/del", parmas);

export const updateBook = (data) => request.post("/book/update", data);
