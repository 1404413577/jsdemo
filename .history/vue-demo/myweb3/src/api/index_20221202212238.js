//导入request.js
import request from "@/utils/request";
//可以按需导出
export const getProduct = () => request.get("/list");

export const getHome = () => request.get("/home");

export const getBook = () => request.get("/book");

export const addBook = (data) => request.post("/book/add", data);

export const delBook = (data) => request.post("/book/del", data);

export const updateBook = (data) => request.post("/book/update", data);

export const getBanner = () => request.get("/banner");
