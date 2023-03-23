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

book.del("/delete", async (ctx) => {
  const res = ctx.request.body;
  const { id } = res;
  if (id) {
    const queryData = [id];
    const data = await query(DELETE_SQL, queryData);
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
