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
//   let id = ctx.request.body.id;
//   let name = ctx.request.body.name;
//   let date = ctx.request.body.date;
//   let prince = ctx.request.body.prince;
//   let num = ctx.request.body.num;
//   let INSERT_SQL = `insert into book values (${id},${name},${date},${prince},${num})`;
//   const data = await query(INSERT_SQL, queryData);
//   if(data && data.status && data.status === 200) {
//     ctx.body = {
//         status: 200,
//         msg: "操作成功",
//     };
// } else {
//     ctx.body = data;
// }
// });


book.map(val=>{
    let sql = `INSERT INTO book VALUES (${id},${name},${date},${prince},${num})`;
    db.query(sql, (err, data)=>{
        if(err) console.log(err);
        console.log(data)
    })
})

module.exports = book;
