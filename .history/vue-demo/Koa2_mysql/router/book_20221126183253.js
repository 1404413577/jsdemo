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

// 用户删除/批量删除
router.post('/delete', async (ctx) => {
    // 待删除用户id数组
    const { userIds } = ctx.request.body
    try {
      const res = await User.updateMany({ userId: { $in: userIds } }, { $set: { state: 2 } })
      ctx.body = util.success(res, `共删除成功${res.modifiedCount}条`)
    } catch (error) {
      ctx.body = util.fail('删除失败', error.stack)
    }
  })
  

module.exports = book;