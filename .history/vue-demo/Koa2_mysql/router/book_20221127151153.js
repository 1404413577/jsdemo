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

// book.post("/add", async (ctx) => {
//     let data = await new Promise((resolve, reject) => {
//       let INSERT_SQL = `insert into book values (5,"js",'2022-08-22',55,)`;
//       db.query(INSERT_SQL, (err, data) => {
//         if (err) reject(err);
//         resolve(data); // 返回拿到的数据
//       });
//     });
//     ctx.body = data;
// });

// const data = [{ id: 6, name: "js", date: "2022-11-19", prince: 56, num: 1 }];
book.post("/add", async (ctx) => {
  const data = ctx.request.body.id;
  data.map((val) => {
    let sql = `INSERT INTO book VALUES (${val.id}, '${val.name}', '${val.date}','${val.prince}','${val.num}')`;
    db.query(sql, (err, data) => {
      if (err) console.log(err);
      console.log(data);
    });
  });
  ctx.body = data;
});

module.exports = book;
