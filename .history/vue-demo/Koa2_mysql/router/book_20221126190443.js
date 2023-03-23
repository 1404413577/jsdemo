const Router = require("koa-router");
const book = new Router();
const db = require("../utils/db");

book.get("/", async (ctx) => {
  let data = await new Promise((resolve, reject) => {
    let sqlLang = `select * from book`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});


book.post('/register', async (ctx) => {
	let id = ctx.request.body.id;
	let name = ctx.request.body.name;
  let date = ctx.request.body.date;
  let prince = ctx.request.body.prince;
	let sql = `SELECT * FROM users WHERE account='${myaccount}'`;
	// let result = await new Promise((resolve, reject) => {
	// 	return db.query(sql, (err, data) => {
	// 		if (err) throw err;
	// 		if (data.length > 0) {
	// 			resolve(data);
	// 		} else {
	// 			resolve(false);
	// 		}
	// 	})
	})

module.exports = book;
