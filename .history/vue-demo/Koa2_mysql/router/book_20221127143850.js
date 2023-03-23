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

book.post("/add", async (ctx) => {
    let data = await new Promise((resolve, reject) => {
      let INSERT_SQL = `insert into book values (5,"js",'2022-08-22',55,)`;
      db.query(INSERT_SQL, (err, data) => {
        if (err) reject(err);
        resolve(data); // 返回拿到的数据
      });
    });
    ctx.body = data;
});

module.exports = book;
