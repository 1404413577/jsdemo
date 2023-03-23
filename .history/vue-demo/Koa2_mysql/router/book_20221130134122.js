const Router = require("koa-router");
const book = new Router();
const db = require("../utils/db");
const bodyParser = require('koa-bodyparser')


book.use(bodyParser());

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
    let id = ctx.request.body.id;
    let name = ctx.request.body.name;
    let date = ctx.request.body.date;
    let prince = ctx.request.body.prince;
    let num = ctx.request.body.num;
    let sqlLang = `INSERT INTO book (id,name,date,prince,num) VALUES (${id}, '${name}', '${date}', '${prince}', '${num}')`;
    db.query(sqlLang, (err, data) => {
      if (err) reject(err);
      resolve(data); // 返回拿到的数据
    });
  });
  ctx.body = data;
});

// book.post("/add", async (ctx) => {
//   const data = [{data: ctx.request.body.data}];
//   data.map((val) => {
//     let sql = `INSERT INTO book (id,name,date,prince,num) VALUES (${val.id}, '${val.name}', '${val.date}','${val.prince}','${val.num}')`;
//     db.query(sql, (err, data) => {
//       if (err) console.log(err);
//       console.log(data);
//     });
//   });
//   ctx.body = data;
// });

// 新增
// book.post("/add", async (ctx, next) => {
//   let sql = `insert into book values (${id}, ${name}, ${date},${prince},${num})`;
//   db.query(sql, (err, data) => {
//     if (err) throw err;
//     console.log("data", data);
//   });
// });

module.exports = book;
