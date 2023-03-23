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

// 插入
// 	let myaccount = ctx.request.body.account;
	// let mypwd = ctx.request.body.pwd;
	// let sql = `SELECT * FROM users WHERE account='${myaccount}'`;
    
// 插入
// book.post('/save', async ctx => {
//     const res = ctx.request.body;
//     const { username = '', realname = '', password = '' } = res;
//     if(username && realname) {
//         const queryData = {
//             username,
//       realname,
//       password,
//         };
//         const data = await query(INSERT_SQL, queryData);
//         if(data && data.status && data.status === 200) {
//             ctx.body = {
//                 status: 200,
//                 msg: "操作成功",
//             };
//         } else {
//             ctx.body = data;
//         }
//     }
// });



// //更新
// book.post('/update', async ctx => {
//     const res = ctx.request.body;
//     const { username = '', id= 1 } = res;
//     if(username && id) {
//         const queryData = [username, id];
//         const data = await query(UPDATE_SQL, queryData);
//         if(data && data.status && data.status === 200) {
//             ctx.body = {
//                 status: 200,
//                 msg: "操作成功",
//             };
//         } else {
//             ctx.body = data;
//         }
//     }
// });


module.exports = book;
