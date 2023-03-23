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
  const res = ctx.request.body;
  const { id = "", name = "", date = "", prince = "", num = "" } = res;
  if (id && name) {
    const queryData = {
      id,name,date,prince,num,
    };
    let INSERT_SQL = `insert into book values (${id},${name},${date},${prince},${num})`;
    const data = await query(INSERT_SQL, queryData);
    if (data && data.status && data.status === 200) {
      ctx.body = {
        status: 200,
        msg: "操作成功",
      };
    } else {
      ctx.body = data;
    }
  }
});

module.exports = book;
