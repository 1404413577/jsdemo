const Router = require("koa-router");
const book = new Router();
const db = require("../utils/db")

book.get('/', async (ctx) => {
		let data = await new Promise((resolve, reject)=>{
			let sqlLang = `select * from book`;
			db.query(sqlLang, (err, data)=>{
				if(err) reject(err);
				resolve(data);	// 返回拿到的数据
			})
		})
		ctx.body = data;
	})

// routes/users.js


  

module.exports = book;